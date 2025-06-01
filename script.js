document.addEventListener('DOMContentLoaded', () => {
    // Starry Background
    const starryBackground = document.getElementById('starry-background');
    if (starryBackground) {
        const numStars = 150; // You can adjust the number of stars here
        for (let i = 0; i < numStars; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 2.5 + 1.5}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            const twinkleDuration = Math.random() * 3 + 2;
            const twinkleDelay = Math.random() * 5;
            const driftDuration = Math.random() * 20 + 30;
            const driftDelay = Math.random() * 30;
            star.style.animation = `
                twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite,
                diagonal-drift ${driftDuration}s linear ${driftDelay}s infinite
            `;
            starryBackground.appendChild(star);
        }
    }

   
    document.addEventListener('click', function(event) {
        if (event.target.closest('.floating-navbar a')) {
            try {
                const linkElement = event.target.closest('a');
                if (linkElement && linkElement.href) { 
                    const linkUrl = new URL(linkElement.href, window.location.origin);
                    const currentUrl = new URL(window.location.href, window.location.origin);
                    if (linkUrl.hostname === currentUrl.hostname && linkUrl.pathname !== currentUrl.pathname) {
                        return; 
                    }
                }
            } catch (e) {
                
            }
        }

        const circle = document.createElement('div');
        circle.classList.add('click-circle');
        document.body.appendChild(circle);
        circle.style.left = `${event.pageX}px`;
        circle.style.top = `${event.pageY}px`;
        setTimeout(() => {
            circle.remove();
        }, 500);
    });

    const allCards = document.querySelectorAll('.card'); 
    allCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    
    const navbarLinks = document.querySelectorAll('.floating-navbar ul li a');
    const bodyElement = document.body;

    navbarLinks.forEach(link => {
        try {
            const linkUrl = new URL(link.href, window.location.origin);
            const currentUrl = new URL(window.location.href, window.location.origin);

           
            if (linkUrl.hostname === currentUrl.hostname &&
                (linkUrl.pathname !== currentUrl.pathname || linkUrl.search !== currentUrl.search)) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const destinationUrl = this.href;
                    bodyElement.classList.add('page-fade-out');
                    setTimeout(() => {
                        window.location.href = destinationUrl;
                    }, 250); 
                });
            }
        } catch (e) {
        }
    });

    window.addEventListener('pageshow', function(event) {
        
        if (bodyElement.classList.contains('page-fade-out')) {
           bodyElement.classList.remove('page-fade-out');
        }
       
    });

   
    const contactCards = document.querySelectorAll('.contact-cards-container .card');
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
           
            this.classList.add('clicked-zoom-animation');

           
            this.addEventListener('animationend', () => {
                this.classList.remove('clicked-zoom-animation');
            }, { once: true });
        });
    });
});