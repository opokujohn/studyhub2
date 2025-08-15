# StudyHub - Educational Website

A fully functional educational platform with course notes, quizzes, and interactive games.

## Features

### 🎓 SmartStudy System
- **Course Notes**: Browse and search study materials across multiple subjects
- **Interactive Quizzes**: Take quizzes with instant feedback and scoring
- **Educational Games**: 
  - Memory Match: Match educational terms with their definitions
  - Word Builder: Unscramble educational vocabulary words

### 🔐 Authentication System
- User registration and login
- Secure password handling
- Forgot password functionality
- User progress tracking and data persistence

### 📱 Modern Design
- Responsive design for all devices
- Modern gradient UI with smooth animations
- Mobile-friendly navigation
- Accessible and intuitive interface

## Getting Started

### Firebase Setup (Required)
1. **Create Firebase project**: Follow instructions in `FIREBASE_SETUP.md`
2. **Update config**: Replace Firebase config in `firebase-config.js`
3. **Open website**: Open `index.html` in your browser (no server needed)

### Using the Website
1. **Create an account**: Click "Login" and then "Sign up" to create a new account
2. **Explore features**:
   - Browse course notes by subject
   - Take quizzes to test your knowledge
   - Play educational games to make learning fun

## File Structure

```
StudyHub/
├── firebase-config.js  # Firebase configuration
├── FIREBASE_SETUP.md   # Setup instructions
├── index.html          # Homepage
├── login.html          # Authentication page
├── notes.html          # Course notes page
├── quiz.html           # Quiz interface
├── games.html          # Educational games
├── css/
│   └── style.css       # All styling
├── js/
│   ├── auth.js         # Authentication system (Firebase)
│   ├── main.js         # Main utilities
│   ├── notes.js        # Notes functionality
│   ├── quiz.js         # Quiz system
│   └── games.js        # Games logic
├── data/
│   └── sample-data.json # Sample data structure
└── README.md           # This file
```

## Subjects Available

- **Mathematics**: Algebra, Geometry, Basic Operations
- **Science**: Biology, Chemistry, Physics
- **History**: World War II, Ancient Civilizations
- **English**: Grammar, Literature Analysis

## Games Included

1. **Memory Match**: Match scientific terms with their definitions
2. **Word Builder**: Unscramble educational vocabulary words

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Firebase Storage

The application uses Firebase to save:
- User accounts with Firebase Authentication
- Quiz scores in Firestore
- Game progress in Firestore
- Real-time data synchronization

## Deployment

To deploy this website:

1. Upload all files to any web hosting service
2. Update Firebase config with your project details
3. No server setup required - works with static hosting

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6 modules)
- **Backend**: Firebase (Authentication + Firestore)
- **Database**: Cloud Firestore NoSQL database
- **Authentication**: Firebase Authentication
- **Responsive**: Mobile-first design

## Future Enhancements

- Add more subjects and quiz questions
- Implement more educational games
- Add user profiles and achievements
- Include study progress tracking
- Add social features for collaborative learning

---

**StudyHub** - Making education accessible and fun! 🎓✨