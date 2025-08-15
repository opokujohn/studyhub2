import { auth, db } from '../firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { doc, setDoc, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Authentication System
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.initAuth();
    }

    initAuth() {
        onAuthStateChanged(auth, (user) => {
            this.currentUser = user;
            this.updateAuthUI();
            
            // Redirect to main page if user is logged in and on auth pages
            if (user && (window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html'))) {
                window.location.href = 'index.html';
            }
        });
    }

    async register(name, email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                name,
                email,
                joinDate: new Date().toISOString()
            });
            
            return { success: true, message: 'Registration successful' };
        } catch (error) {
            // Fallback to localStorage if Firebase fails
            const users = JSON.parse(localStorage.getItem('studyhub_users')) || [];
            if (users.find(user => user.email === email)) {
                return { success: false, message: 'Email already exists' };
            }
            
            const user = { id: Date.now(), name, email, password: btoa(password) };
            users.push(user);
            localStorage.setItem('studyhub_users', JSON.stringify(users));
            return { success: true, message: 'Registration successful' };
        }
    }

    async login(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { success: true, message: 'Login successful' };
        } catch (error) {
            // Fallback to localStorage if Firebase fails
            const users = JSON.parse(localStorage.getItem('studyhub_users')) || [];
            const user = users.find(u => u.email === email && u.password === btoa(password));
            if (user) {
                this.currentUser = user;
                localStorage.setItem('studyhub_current_user', JSON.stringify(user));
                this.updateAuthUI();
                return { success: true, message: 'Login successful' };
            }
            return { success: false, message: 'Invalid credentials' };
        }
    }

    async logout() {
        try {
            await signOut(auth);
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    async resetPassword(email) {
        try {
            await sendPasswordResetEmail(auth, email);
            return { success: true, message: 'Password reset link sent to your email!' };
        } catch (error) {
            return { success: false, message: 'Email not found or invalid' };
        }
    }

    updateAuthUI() {
        const authLink = document.getElementById('auth-link');
        const welcomeMessage = document.getElementById('welcome-message');
        const authRequired = document.getElementById('auth-required');
        const userFeatures = document.getElementById('user-features');
        
        if (authLink) {
            if (this.currentUser) {
                authLink.textContent = 'Logout';
                authLink.onclick = (e) => {
                    e.preventDefault();
                    this.logout();
                };
                
                // Update welcome message with user name
                if (welcomeMessage) {
                    const userName = this.currentUser.displayName || this.currentUser.name || 'User';
                    welcomeMessage.textContent = `Welcome back, ${userName}!`;
                }
                
                // Show features, hide login prompt
                if (authRequired) authRequired.style.display = 'none';
                if (userFeatures) userFeatures.style.display = 'flex';
                
            } else {
                authLink.textContent = 'Login';
                authLink.href = 'login.html';
                authLink.onclick = null;
                
                // Show login prompt, hide features
                if (welcomeMessage) welcomeMessage.textContent = 'Welcome to StudyHub';
                if (authRequired) authRequired.style.display = 'block';
                if (userFeatures) userFeatures.style.display = 'none';
            }
        }
    }

    async saveQuizScore(subject, score, total) {
        if (this.currentUser) {
            try {
                await addDoc(collection(db, 'quizScores'), {
                    userId: this.currentUser.uid,
                    subject,
                    score,
                    total,
                    percentage: Math.round((score / total) * 100),
                    date: new Date().toISOString()
                });
            } catch (error) {
                console.error('Failed to save quiz score:', error);
            }
        }
    }

    async saveGameProgress(game, data) {
        if (this.currentUser) {
            try {
                await setDoc(doc(db, 'gameProgress', `${this.currentUser.uid}_${game}`), {
                    userId: this.currentUser.uid,
                    game,
                    data,
                    lastUpdated: new Date().toISOString()
                });
            } catch (error) {
                console.error('Failed to save game progress:', error);
            }
        }
    }
}

// Initialize auth system
const authSystem = new AuthSystem();

// Make functions globally accessible
window.showTab = function(tab) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tab + '-tab').classList.add('active');
    document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add('active');
};

window.showForgot = function() {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById('forgot-tab').classList.add('active');
};

window.handleLogin = async function(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    
    const result = await authSystem.login(email, password);
    if (result.success) {
        window.location.href = 'index.html';
    } else {
        alert(result.message);
    }
};

window.handleSignup = async function(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    
    try {
        const result = await authSystem.register(name, email, password);
        
        if (result.success) {
            window.location.href = 'index.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('Registration failed. Please try again.');
    }
};

window.handleForgotPassword = async function(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    const result = await authSystem.resetPassword(email);
    alert(result.message);
    if (result.success) {
        window.location.href = 'login.html';
    }
};