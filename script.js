// Milestone data - Complete for all locations with MORE DEMO POINTS
const milestoneData = {
    'first-meeting': {
        title: 'First Meeting',
        message: 'The day our paths crossed near Udvash in Dhanmondi...\n\nTwo hearts found each other in the most unexpected moment.',
        images: [
            { url: 'https://via.placeholder.com/800x600/ff1493/ffffff?text=First+Meeting+Photo+1', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/8B008B/ffffff?text=First+Meeting+Photo+2', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/4B0082/ffffff?text=First+Meeting+Photo+3', direction: 'bottom' }
        ],
        closingMessage: 'From that moment, everything changed... ✨',
        nextMilestone: 'Confessing Our Feelings',
        nextId: 'confessing-feelings'
    },
    
    'confessing-feelings': {
        title: 'Confessing Feelings',
        message: 'The moment when words finally found their way out...\n\nOur hearts spoke the truth they had been holding.',
        images: [
            { url: 'https://via.placeholder.com/800x600/ff69b4/ffffff?text=Confession+Photo+1', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/da70d6/ffffff?text=Confession+Photo+2', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/ee82ee/ffffff?text=Confession+Photo+3', direction: 'bottom' },
            { url: 'https://via.placeholder.com/800x600/ff1493/ffffff?text=Confession+Photo+4', direction: 'left' }
        ],
        closingMessage: 'You said yes, and my world became complete... 💕',
        nextMilestone: 'Ring Exchange',
        nextId: 'ring-exchange'
    },
    
    'ring-exchange': {
        title: 'Ring Exchange',
        message: 'A promise sealed with rings...\n\nA symbol of forever, a commitment of hearts.',
        images: [
            { url: 'https://via.placeholder.com/800x600/ff1493/ffffff?text=Ring+Exchange+Photo+1', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/8B008B/ffffff?text=Ring+Exchange+Photo+2', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/4B0082/ffffff?text=Ring+Exchange+Photo+3', direction: 'bottom' },
            { url: 'https://via.placeholder.com/800x600/ff69b4/ffffff?text=Ring+Exchange+Photo+4', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/da70d6/ffffff?text=Ring+Exchange+Photo+5', direction: 'right' }
        ],
        closingMessage: 'With this ring, I promise you my forever... 💍',
        nextMilestone: 'Cox\'s Bazar',
        nextId: 'future-coxs-bazar'
    },
    
    'future-coxs-bazar': {
        title: 'Our Dream: Cox\'s Bazar',
        message: 'Soon we\'ll walk on the longest beach in the world...\n\nHand in hand, watching the sunset over the Bay of Bengal.',
        images: [
            { url: 'https://via.placeholder.com/800x600/87ceeb/ffffff?text=Coxs+Bazar+Beach', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/4682b4/ffffff?text=Sunset+Together', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/5f9ea0/ffffff?text=Walking+Hand+in+Hand', direction: 'bottom' }
        ],
        closingMessage: 'Our first adventure awaits... 🏖️',
        nextMilestone: 'Maldives',
        nextId: 'future-maldives'
    },
    
    'future-maldives': {
        title: 'Our Dream: Maldives',
        message: 'One day, we\'ll stand in paradise together...\n\nCrystal clear waters, white sand, and endless love.',
        images: [
            { url: 'https://via.placeholder.com/800x600/00ced1/ffffff?text=Maldives+Ocean', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/20b2aa/ffffff?text=Overwater+Villa', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/48d1cc/ffffff?text=Paradise+Together', direction: 'bottom' }
        ],
        closingMessage: 'A dream destination for our endless journey... 🏝️',
        nextMilestone: 'A Beautiful Day',
        nextId: 'demo-1'
    },
    
    'demo-1': {
        title: 'A Beautiful Day',
        message: 'Every moment with you is a treasure...\n\nThis memory holds a special place in my heart.',
        images: [
            { url: 'https://via.placeholder.com/800x600/ff1493/ffffff?text=Beautiful+Day+Photo+1', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/8B008B/ffffff?text=Beautiful+Day+Photo+2', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/4B0082/ffffff?text=Beautiful+Day+Photo+3', direction: 'bottom' },
            { url: 'https://via.placeholder.com/800x600/ff69b4/ffffff?text=Beautiful+Day+Photo+4', direction: 'left' }
        ],
        closingMessage: 'Thank you for making every day magical... ✨',
        nextMilestone: 'Sweet Moments',
        nextId: 'demo-2'
    },
    
    'demo-2': {
        title: 'Sweet Moments Together',
        message: 'The little things we share...\n\nLaughter, joy, and endless memories.',
        images: [
            { url: 'https://via.placeholder.com/800x600/ff1493/ffffff?text=Sweet+Moment+1', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/8B008B/ffffff?text=Sweet+Moment+2', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/4B0082/ffffff?text=Sweet+Moment+3', direction: 'bottom' }
        ],
        closingMessage: 'Every second with you is precious... 💝',
        nextMilestone: 'Our Adventures',
        nextId: 'demo-3'
    },
    
    'demo-3': {
        title: 'Our Adventures',
        message: 'Exploring the world together...\n\nCreating stories we\'ll tell forever.',
        images: [
            { url: 'https://via.placeholder.com/800x600/ff69b4/ffffff?text=Adventure+Photo+1', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/da70d6/ffffff?text=Adventure+Photo+2', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/ee82ee/ffffff?text=Adventure+Photo+3', direction: 'bottom' },
            { url: 'https://via.placeholder.com/800x600/ff1493/ffffff?text=Adventure+Photo+4', direction: 'left' }
        ],
        closingMessage: 'More adventures await us... 🗺️',
        nextMilestone: 'Final Message',
        nextId: 'demo-4'
    },
    
    'demo-4': {
        title: 'Happy 2nd Anniversary!',
        message: 'Two years of love, laughter, and beautiful memories...\n\nHere\'s to forever with you, Sania!',
        images: [
            { url: 'https://via.placeholder.com/800x600/ff1493/ffffff?text=Anniversary+Photo+1', direction: 'left' },
            { url: 'https://via.placeholder.com/800x600/8B008B/ffffff?text=Anniversary+Photo+2', direction: 'right' },
            { url: 'https://via.placeholder.com/800x600/4B0082/ffffff?text=Anniversary+Photo+3', direction: 'bottom' }
        ],
        closingMessage: 'I love you more each day. ❤️\n\nHere\'s to our forever... 💕',
        nextMilestone: null,
        nextId: null
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Draw the path connecting all milestones
    drawJourneyPath();
    
    // Add click handler to start journey button
    const startButton = document.getElementById('start-journey');
    if (startButton) {
        startButton.addEventListener('click', function() {
            zoomToMilestone('first-meeting');
        });
    }
    
    // Start continuous particle effects
    startMagicalParticles();
    
    // Animate milestone labels
    animateMilestoneLabels();
});

// Function to draw the dashed path connecting milestones
function drawJourneyPath() {
    const milestones = [
        { id: 'first-meeting', left: 10, top: 55 },
        { id: 'confessing-feelings', left: 20, top: 35 },
        { id: 'ring-exchange', left: 30, top: 60 },
        { id: 'future-coxs-bazar', left: 45, top: 40 },
        { id: 'future-maldives', left: 55, top: 65 },
        { id: 'demo-1', left: 68, top: 45 },
        { id: 'demo-2', left: 75, top: 70 },
        { id: 'demo-3', left: 85, top: 50 },
        { id: 'demo-4', left: 90, top: 70 }
    ];
    
    const path = document.getElementById('journey-path');
    if (!path) return;
    
    const container = document.querySelector('.map-container');
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    
    // Calculate all points first
    const points = milestones.map(m => ({
        x: (m.left / 100) * containerWidth,
        y: (m.top / 100) * containerHeight
    }));
    
    // Start path at first point
    let pathData = `M ${points[0].x} ${points[0].y} `;
    
    // Create smooth curves between each pair of points using cubic Bézier (C command)
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        
        // Calculate distance and direction
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        
        // Control points for smooth S-curve
        const cp1x = prev.x + dx * 0.5;
        const cp1y = prev.y + dy * 0.2;
        
        const cp2x = curr.x - dx * 0.5;
        const cp2y = curr.y - dy * 0.2;
        
        // Use cubic Bézier curve (C) for professional smooth curves
        pathData += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y} `;
    }
    
    path.setAttribute('d', pathData);
    
    // Animate the path drawing
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    
    // Trigger animation
    setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 3s ease-in-out';
        path.style.strokeDashoffset = '0';
    }, 500);
}

// Function to zoom to a specific milestone
function zoomToMilestone(milestoneId) {
    const mapContainer = document.getElementById('map-container');
    const milestone = document.getElementById(milestoneId);
    
    if (!mapContainer || !milestone) {
        console.error('Map container or milestone not found:', milestoneId);
        return;
    }
    
    console.log('Zooming to:', milestoneId);
    
    // Add zoom class to container
    mapContainer.classList.add('zooming');
    
    // Get position of milestone
    const rect = milestone.getBoundingClientRect();
    const containerRect = mapContainer.getBoundingClientRect();
    
    // Calculate center position
    const centerX = rect.left + rect.width / 2 - containerRect.left;
    const centerY = rect.top + rect.height / 2 - containerRect.top;
    
    // Calculate transform values to center the milestone
    const scaleValue = 3;
    const translateX = (window.innerWidth / 2 - centerX) * scaleValue;
    const translateY = (window.innerHeight / 2 - centerY) * scaleValue;
    
    // Apply zoom transformation
    mapContainer.style.transition = 'transform 2s ease-in-out';
    mapContainer.style.transform = `scale(${scaleValue}) translate(${translateX / scaleValue}px, ${translateY / scaleValue}px)`;
    
    // Hide other elements during zoom
    const header = document.getElementById('header');
    const compass = document.getElementById('compass');
    const button = document.getElementById('start-journey');
    
    if (header) {
        header.style.transition = 'opacity 1s ease';
        header.style.opacity = '0';
    }
    if (compass) {
        compass.style.transition = 'opacity 1s ease';
        compass.style.opacity = '0';
    }
    if (button) {
        button.style.transition = 'opacity 1s ease';
        button.style.opacity = '0';
    }
    
    // After zoom animation, show the popup
    setTimeout(() => {
        openMilestonePopup(milestoneId);
    }, 2000);
}

// Function to open milestone popup
function openMilestonePopup(milestoneId) {
    console.log('=== Opening popup for:', milestoneId, '===');
    
    const modal = document.getElementById('popup-modal');
    const scrollContainer = document.getElementById('popup-scroll');
    const data = milestoneData[milestoneId];
    
    if (!modal || !scrollContainer) {
        console.error('ERROR: Modal elements not found!', { modal, scrollContainer });
        return;
    }
    
    if (!data) {
        console.error('ERROR: No data found for milestone:', milestoneId);
        return;
    }
    
    // Clear previous content
    scrollContainer.innerHTML = '';
    
    // CRITICAL: Reset scroll position to top BEFORE adding content
    scrollContainer.scrollTop = 0;
    
    // Create opening message section
    const messageSection = createMessageSection(data.message);
    scrollContainer.appendChild(messageSection);
    
    // Create image sections
    data.images.forEach((img, index) => {
        const imageSection = createImageSection(img.url, img.direction, index);
        scrollContainer.appendChild(imageSection);
    });
    
    // Create closing message section
    const closingSection = createMessageSection(data.closingMessage);
    scrollContainer.appendChild(closingSection);
    
    // Create travel transition section
    const travelSection = createTravelSection(data.nextMilestone, data.nextId);
    scrollContainer.appendChild(travelSection);
    
    // Show modal
    modal.style.display = 'block';
    
    // CRITICAL: Force scroll to top again after content is added
    scrollContainer.scrollTop = 0;
    
    // Force reflow
    modal.offsetHeight;
    
    modal.classList.add('active');
    
    // Start continuous particle generation
    startParticleGeneration();
    
    // CRITICAL: Setup scroll listeners AFTER content is added and scroll is reset
    setTimeout(() => {
        setupScrollListeners(scrollContainer);
        
        // Show first section immediately
        const firstSection = scrollContainer.querySelector('.popup-section');
        if (firstSection) {
            firstSection.classList.add('visible');
            createConfetti(firstSection);
        }
    }, 50);
    
    console.log('=== Popup setup complete ===');
}

function createMessageSection(text) {
    const section = document.createElement('div');
    section.className = 'popup-section message-section';
    section.innerHTML = `
        <p class="message-text">${text.replace(/\n/g, '<br>')}</p>
        <div class="tap-badge">Tap anywhere to continue ✨</div>
    `;
    return section;
}

function createImageSection(imageUrl, direction, index) {
    const section = document.createElement('div');
    section.className = 'popup-section image-section';
    section.innerHTML = `
        <img src="${imageUrl}" alt="Memory ${index + 1}" class="popup-image" data-direction="${direction}">
        <div class="image-overlay">Tap the photo! 📸</div>
    `;
    
    // Add tap interaction to image
    section.addEventListener('click', function(e) {
        const img = section.querySelector('.popup-image');
        if (!img) return;
        
        // Shake animation
        img.classList.add('shake');
        setTimeout(() => img.classList.remove('shake'), 500);
        
        // Create particle burst at tap location
        createParticleBurst(e.clientX, e.clientY);
        
        // Create confetti
        createConfetti(section);
    });
    
    return section;
}

function createTravelSection(nextLocation, nextId) {
    const section = document.createElement('div');
    section.className = 'popup-section travel-section';
    
    if (nextLocation && nextId) {
        // There is a next location - show travel animation
        section.innerHTML = `
            <div class="travel-road"></div>
            <p class="travel-text">Let's travel to<br><strong>${nextLocation}</strong></p>
            <div class="travel-animation">🚗💨</div>
            <button class="continue-btn" onclick="continueToNext('${nextId}')">Continue Journey →</button>
        `;
    } else {
        // Final location - show completion message
        section.innerHTML = `
            <p class="travel-text final-message">
                <strong>Our Journey Continues...</strong><br><br>
                This is just the beginning of our forever.<br>
                Thank you for two beautiful years, Sania.<br><br>
                I love you more than words can say. ❤️
            </p>
            <button class="close-btn" onclick="closePopup()">Close & Return to Map 🗺️</button>
        `;
    }
    
    return section;
}

// Create floating particles container
function createParticlesContainer() {
    const modal = document.getElementById('popup-modal');
    if (!modal) return null;
    
    let container = document.getElementById('popup-particles');
    if (!container) {
        container = document.createElement('div');
        container.className = 'popup-particles';
        container.id = 'popup-particles';
        modal.appendChild(container);
    }
    return container;
}

// Particle burst on tap
function createParticleBurst(x, y) {
    const container = createParticlesContainer();
    if (!container) return;
    
    const particles = ['❤️', '💕', '💖', '✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'popup-particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = (i * 0.1) + 's';
        
        container.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => particle.remove(), 4000);
    }
}

// Create confetti effect
function createConfetti(container) {
    if (!container) return;
    
    const colors = ['#ff1493', '#8B008B', '#4B0082', '#FF69B4', '#DA70D6'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = (Math.random() * 100) + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Generate continuous floating particles
function generateFloatingParticles() {
    const container = document.getElementById('popup-particles');
    if (!container) return;
    
    const particle = document.createElement('div');
    const particles = ['✨', '💫', '⭐', '🌟'];
    particle.className = 'popup-particle';
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-50px';
    particle.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
    
    container.appendChild(particle);
    
    setTimeout(() => particle.remove(), 4000);
}

// Start particle generation when modal opens
let particleInterval;
function startParticleGeneration() {
    createParticlesContainer();
    if (particleInterval) clearInterval(particleInterval);
    particleInterval = setInterval(generateFloatingParticles, 800);
}

function stopParticleGeneration() {
    if (particleInterval) {
        clearInterval(particleInterval);
        particleInterval = null;
    }
}

function setupScrollListeners(container) {
    if (!container) return;
    
    const scrollIndicator = document.getElementById('scroll-indicator');
    const sections = container.querySelectorAll('.popup-section');
    
    console.log('Total sections:', sections.length);
    
    // Immediately show the first section (opening message)
    if (sections.length > 0) {
        sections[0].classList.add('visible');
        console.log('First section made visible');
    }
    
    container.addEventListener('scroll', () => {
        const scrollTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        
        console.log('Scroll position:', scrollTop);
        
        // Hide scroll indicator when scrolled
        if (scrollIndicator) {
            if (scrollTop > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }
        
        // Show sections as they come into view
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            // Calculate position relative to the scroll container
            const relativeTop = rect.top - containerRect.top;
            const relativeBottom = rect.bottom - containerRect.top;
            
            // Section is visible if it's within 80% of viewport from top
            const isInView = relativeTop < containerHeight * 0.8 && relativeBottom > 0;
            
            if (isInView && !section.classList.contains('visible')) {
                console.log('Making section', index, 'visible');
                section.classList.add('visible');
                
                // Trigger image animation
                const img = section.querySelector('.popup-image');
                if (img && !img.classList.contains('visible')) {
                    setTimeout(() => {
                        img.classList.add('visible');
                        console.log('Image in section', index, 'made visible');
                    }, 300);
                }
            }
        });
    });
    
    // Trigger initial scroll check in case some sections are already in view
    setTimeout(() => {
        container.dispatchEvent(new Event('scroll'));
    }, 100);
}

// Navigate to next milestone WITH TRAVELING ANIMATION
function continueToNext(nextId) {
    stopParticleGeneration();
    const modal = document.getElementById('popup-modal');
    const mapContainer = document.getElementById('map-container');
    
    if (!modal || !mapContainer) return;
    
    // Close modal first
    modal.classList.remove('active');
    
    // Wait for modal to fade out, then start traveling animation
    setTimeout(() => {
        modal.style.display = 'none';
        
        // Show the traveling couple animation
        showTravelingAnimation(nextId);
    }, 500);
}

// NEW FUNCTION: Show traveling animation between milestones
function showTravelingAnimation(targetMilestoneId) {
    const mapContainer = document.getElementById('map-container');
    
    // Zoom out to show full map
    mapContainer.style.transition = 'transform 1.5s ease-in-out';
    mapContainer.style.transform = 'scale(1)';
    
    // Show all elements
    const header = document.getElementById('header');
    const compass = document.getElementById('compass');
    
    if (header) header.style.opacity = '1';
    if (compass) compass.style.opacity = '1';
    
    // Create traveling couple emoji
    const travelingCouple = document.createElement('div');
    travelingCouple.className = 'traveling-couple';
    travelingCouple.innerHTML = '👫💕';
    mapContainer.appendChild(travelingCouple);
    
    // Get current and target milestone positions
    const currentMilestone = mapContainer.querySelector('.milestone.active');
    const targetMilestone = document.getElementById(targetMilestoneId);
    
    if (!targetMilestone) {
        console.error('Target milestone not found:', targetMilestoneId);
        return;
    }
    
    // Remove active class from current
    if (currentMilestone) {
        currentMilestone.classList.remove('active');
    }
    
    // Set starting position
    let startX = 10; // Default to first milestone position
    let startY = 55;
    
    if (currentMilestone) {
        startX = parseFloat(currentMilestone.style.left);
        startY = parseFloat(currentMilestone.style.top);
    }
    
    const targetX = parseFloat(targetMilestone.style.left);
    const targetY = parseFloat(targetMilestone.style.top);
    
    travelingCouple.style.left = startX + '%';
    travelingCouple.style.top = startY + '%';
    
    // Animate couple moving to target
    setTimeout(() => {
        travelingCouple.style.transition = 'all 2.5s ease-in-out';
        travelingCouple.style.left = targetX + '%';
        travelingCouple.style.top = targetY + '%';
    }, 100);
    
    // After traveling animation, zoom into target and remove couple
    setTimeout(() => {
        travelingCouple.remove();
        targetMilestone.classList.add('active');
        zoomToMilestone(targetMilestoneId);
    }, 2700);
}

// Close popup and return to map
function closePopup() {
    stopParticleGeneration();
    const modal = document.getElementById('popup-modal');
    const mapContainer = document.getElementById('map-container');
    
    if (!modal) return;
    
    // Fade out modal
    modal.classList.remove('active');
    
    // Reset map zoom
    setTimeout(() => {
        modal.style.display = 'none';
        
        if (mapContainer) {
            mapContainer.style.transform = '';
            mapContainer.classList.remove('zooming');
        }
        
        // Show hidden elements
        const header = document.getElementById('header');
        const compass = document.getElementById('compass');
        const button = document.getElementById('start-journey');
        
        if (header) header.style.opacity = '1';
        if (compass) compass.style.opacity = '1';
        if (button) button.style.opacity = '1';
        
        // Remove active class from all milestones
        const milestones = document.querySelectorAll('.milestone');
        milestones.forEach(m => m.classList.remove('active'));
    }, 500);
}

// Create magical floating particles
function startMagicalParticles() {
    const mapContainer = document.querySelector('.map-container');
    if (!mapContainer) return;
    
    setInterval(() => {
        createParticle(mapContainer);
    }, 800);
}

function createParticle(container) {
    if (!container) return;
    
    const particle = document.createElement('div');
    const symbols = ['✨', '💫', '⭐', '🌟', '💝', '💖'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    particle.textContent = symbol;
    particle.style.position = 'absolute';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '-50px';
    particle.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    particle.style.opacity = '0';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '2';
    particle.style.transition = 'all 4s ease-out';
    
    container.appendChild(particle);
    
    // Trigger animation - fall down
    setTimeout(() => {
        particle.style.top = '110%';
        particle.style.opacity = '0.8';
        particle.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
    }, 10);
    
    // Fade out
    setTimeout(() => {
        particle.style.opacity = '0';
    }, 3000);
    
    // Remove from DOM
    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Animate milestone labels with scale pulse
function animateMilestoneLabels() {
    const labels = document.querySelectorAll('.milestone-label');
    
    labels.forEach((label, index) => {
        setInterval(() => {
            label.style.transition = 'transform 0.5s ease';
            label.style.transform = 'translateX(-50%) scale(1.1)';
            
            setTimeout(() => {
                label.style.transform = 'translateX(-50%) scale(1)';
            }, 500);
        }, 3000 + (index * 600));
    });
}

// Redraw path on window resize
window.addEventListener('resize', function() {
    drawJourneyPath();
});