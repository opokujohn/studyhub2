// Course Notes System
const notesData = [
    {
        id: 1,
        title: "Introduction to Algebra",
        subject: "math",
        content: `
            <h2>Introduction to Algebra</h2>
            <p>Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.</p>
            <h3>Key Concepts:</h3>
            <ul>
                <li>Variables and Constants</li>
                <li>Linear Equations</li>
                <li>Quadratic Equations</li>
                <li>Functions and Graphs</li>
            </ul>
            <h3>Basic Operations:</h3>
            <p>In algebra, we use letters to represent unknown numbers. For example:</p>
            <p><strong>x + 5 = 12</strong></p>
            <p>To solve for x, we subtract 5 from both sides: x = 7</p>
        `,
        preview: "Learn the fundamentals of algebra including variables, equations, and basic operations."
    },
    {
        id: 2,
        title: "Geometry Basics",
        subject: "math",
        content: `
            <h2>Geometry Basics</h2>
            <p>Geometry is the study of shapes, sizes, and properties of space.</p>
            <h3>Basic Shapes:</h3>
            <ul>
                <li>Points, Lines, and Planes</li>
                <li>Triangles and their properties</li>
                <li>Circles and circumference</li>
                <li>Rectangles and squares</li>
            </ul>
            <h3>Important Formulas:</h3>
            <p><strong>Area of a rectangle:</strong> length × width</p>
            <p><strong>Area of a circle:</strong> π × radius²</p>
            <p><strong>Pythagorean theorem:</strong> a² + b² = c²</p>
        `,
        preview: "Explore basic geometric shapes, properties, and essential formulas."
    },
    {
        id: 3,
        title: "Cell Biology",
        subject: "science",
        content: `
            <h2>Cell Biology</h2>
            <p>Cells are the basic units of life. All living organisms are made up of one or more cells.</p>
            <h3>Types of Cells:</h3>
            <ul>
                <li>Prokaryotic cells (bacteria)</li>
                <li>Eukaryotic cells (plants, animals)</li>
            </ul>
            <h3>Cell Organelles:</h3>
            <ul>
                <li>Nucleus - controls cell activities</li>
                <li>Mitochondria - powerhouse of the cell</li>
                <li>Ribosomes - protein synthesis</li>
                <li>Cell membrane - controls what enters/exits</li>
            </ul>
        `,
        preview: "Understanding the structure and function of cells, the building blocks of life."
    },
    {
        id: 4,
        title: "Physics: Motion and Forces",
        subject: "science",
        content: `
            <h2>Motion and Forces</h2>
            <p>Physics helps us understand how objects move and the forces that affect them.</p>
            <h3>Newton's Laws of Motion:</h3>
            <ol>
                <li><strong>First Law:</strong> An object at rest stays at rest unless acted upon by a force</li>
                <li><strong>Second Law:</strong> Force = mass × acceleration (F = ma)</li>
                <li><strong>Third Law:</strong> For every action, there is an equal and opposite reaction</li>
            </ol>
            <h3>Types of Forces:</h3>
            <ul>
                <li>Gravity</li>
                <li>Friction</li>
                <li>Applied force</li>
                <li>Normal force</li>
            </ul>
        `,
        preview: "Learn about motion, forces, and Newton's fundamental laws of physics."
    },
    {
        id: 5,
        title: "World War II Overview",
        subject: "history",
        content: `
            <h2>World War II (1939-1945)</h2>
            <p>World War II was a global conflict that involved most of the world's nations.</p>
            <h3>Key Events:</h3>
            <ul>
                <li>1939: Germany invades Poland</li>
                <li>1941: Pearl Harbor attack</li>
                <li>1944: D-Day invasion</li>
                <li>1945: End of war in Europe and Pacific</li>
            </ul>
            <h3>Major Powers:</h3>
            <p><strong>Allies:</strong> United States, Britain, Soviet Union, France</p>
            <p><strong>Axis:</strong> Germany, Japan, Italy</p>
            <h3>Impact:</strong>
            <p>The war resulted in significant changes to world politics and the establishment of the United Nations.</p>
        `,
        preview: "Comprehensive overview of World War II, its causes, major events, and consequences."
    },
    {
        id: 6,
        title: "Ancient Civilizations",
        subject: "history",
        content: `
            <h2>Ancient Civilizations</h2>
            <p>Ancient civilizations laid the foundation for modern society.</p>
            <h3>Major Civilizations:</h3>
            <ul>
                <li><strong>Mesopotamia:</strong> First cities and writing system</li>
                <li><strong>Ancient Egypt:</strong> Pyramids and hieroglyphics</li>
                <li><strong>Ancient Greece:</strong> Democracy and philosophy</li>
                <li><strong>Roman Empire:</strong> Law and engineering</li>
            </ul>
            <h3>Contributions:</h3>
            <p>These civilizations contributed writing, mathematics, art, architecture, and systems of government that influence us today.</p>
        `,
        preview: "Explore the great ancient civilizations and their lasting contributions to humanity."
    },
    {
        id: 7,
        title: "Grammar Fundamentals",
        subject: "english",
        content: `
            <h2>English Grammar Fundamentals</h2>
            <p>Good grammar is essential for clear communication.</p>
            <h3>Parts of Speech:</h3>
            <ul>
                <li><strong>Nouns:</strong> Person, place, thing, or idea</li>
                <li><strong>Verbs:</strong> Action or state of being</li>
                <li><strong>Adjectives:</strong> Describe nouns</li>
                <li><strong>Adverbs:</strong> Describe verbs, adjectives, or other adverbs</li>
            </ul>
            <h3>Sentence Structure:</h3>
            <p>A complete sentence needs a subject and a predicate.</p>
            <p><strong>Example:</strong> The cat (subject) ran quickly (predicate).</p>
        `,
        preview: "Master the basics of English grammar including parts of speech and sentence structure."
    },
    {
        id: 8,
        title: "Literature Analysis",
        subject: "english",
        content: `
            <h2>Literature Analysis</h2>
            <p>Analyzing literature helps us understand deeper meanings in texts.</p>
            <h3>Literary Elements:</h3>
            <ul>
                <li><strong>Theme:</strong> The main message or idea</li>
                <li><strong>Character:</strong> People in the story</li>
                <li><strong>Plot:</strong> The sequence of events</li>
                <li><strong>Setting:</strong> Time and place</li>
                <li><strong>Symbolism:</strong> Objects representing ideas</li>
            </ul>
            <h3>Analysis Techniques:</h3>
            <p>Look for patterns, recurring motifs, and how characters change throughout the story.</p>
        `,
        preview: "Learn how to analyze literature by examining themes, characters, and literary devices."
    }
];

let currentNotes = [...notesData];
let currentFilter = 'all';

// Initialize notes page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('notes.html')) {
        displayNotes(currentNotes);
    }
});

function displayNotes(notes) {
    const notesGrid = document.getElementById('notes-grid');
    if (!notesGrid) return;
    
    notesGrid.innerHTML = '';
    
    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.onclick = () => openNote(note);
        
        noteCard.innerHTML = `
            <span class="subject">${note.subject.charAt(0).toUpperCase() + note.subject.slice(1)}</span>
            <h3>${note.title}</h3>
            <p>${note.preview}</p>
        `;
        
        notesGrid.appendChild(noteCard);
    });
}

function filterNotes(subject) {
    // Update active filter
    document.querySelectorAll('#subjects li').forEach(li => {
        li.classList.remove('active');
    });
    event.target.classList.add('active');
    
    currentFilter = subject;
    
    if (subject === 'all') {
        currentNotes = [...notesData];
    } else {
        currentNotes = notesData.filter(note => note.subject === subject);
    }
    
    displayNotes(currentNotes);
}

function searchNotes() {
    const searchTerm = document.getElementById('search-notes').value.toLowerCase();
    
    let filteredNotes = currentFilter === 'all' ? [...notesData] : notesData.filter(note => note.subject === currentFilter);
    
    if (searchTerm) {
        filteredNotes = filteredNotes.filter(note => 
            note.title.toLowerCase().includes(searchTerm) ||
            note.preview.toLowerCase().includes(searchTerm) ||
            note.content.toLowerCase().includes(searchTerm)
        );
    }
    
    displayNotes(filteredNotes);
}

function openNote(note) {
    const modal = document.getElementById('note-modal');
    const noteContent = document.getElementById('note-content');
    
    noteContent.innerHTML = note.content;
    modal.classList.remove('hidden');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeNoteModal() {
    const modal = document.getElementById('note-modal');
    modal.classList.add('hidden');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('note-modal');
    if (event.target === modal) {
        closeNoteModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeNoteModal();
    }
});