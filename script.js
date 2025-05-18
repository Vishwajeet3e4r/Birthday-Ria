// Animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add confetti effect when the page loads
    createConfetti();
    
    // Add balloon floating effect
    addFloatingBalloons();
});

// Create confetti effect
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);
    
    // Create 50 confetti elements
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = getRandomColor();
        
        // Random confetti shape
        const shapes = ['circle', 'triangle', 'square'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.classList.add(shape);
        
        confettiContainer.appendChild(confetti);
    }
    
    // Add the confetti styles
    const style = document.createElement('style');
    style.textContent = `
        .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 100;
            overflow: hidden;
        }
        
        .confetti {
            position: absolute;
            top: -10px;
            width: 10px;
            height: 10px;
            animation: fall 10s linear infinite;
        }
        
        .confetti.circle {
            border-radius: 50%;
        }
        
        .confetti.triangle {
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 10px solid;
            background-color: transparent !important;
        }
        
        .confetti.square {
            transform: rotate(45deg);
        }
        
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            75% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add floating balloons
function addFloatingBalloons() {
    const balloonContainer = document.createElement('div');
    balloonContainer.classList.add('balloon-container');
    document.body.appendChild(balloonContainer);
    
    // Create 12 balloons
    for (let i = 0; i < 12; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 10 + 's';
        balloon.style.backgroundColor = getRandomColor();
        balloonContainer.appendChild(balloon);
        
        // Add balloon string
        const string = document.createElement('div');
        string.classList.add('balloon-string');
        balloon.appendChild(string);
    }
    
    // Add the balloon styles
    const style = document.createElement('style');
    style.textContent = `
        .balloon-container {
            position: fixed;
            bottom: -100px;
            left: 0;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            z-index: 50;
        }
        
        .balloon {
            position: absolute;
            bottom: 0;
            width: 40px;
            height: 50px;
            border-radius: 50%;
            animation: float 20s linear infinite;
        }
        
        .balloon::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 15px;
            height: 15px;
            border-radius: 0 0 15px 15px;
            background-color: inherit;
        }
        
        .balloon-string {
            position: absolute;
            top: 50px;
            left: 50%;
            height: 80px;
            width: 1px;
            background-color: rgba(0, 0, 0, 0.2);
            transform: translateX(-50%);
        }
        
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-100vh) translateX(50px) rotate(10deg);
            }
            100% {
                transform: translateY(-200vh) translateX(-50px) rotate(-10deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Get random color
function getRandomColor() {
    const colors = [
        '#f8c8dc', // Light pink
        '#e6f5ff', // Light blue
        '#ffd6e7', // Soft pink
        '#c8f8e1', // Mint
        '#ffeac8', // Light orange
        '#e0c8f8', // Light purple
        '#ffcdc8'  // Light coral
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}