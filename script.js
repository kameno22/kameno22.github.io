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

    // General Click Effect
    document.addEventListener('click', function(event) {
        // Prevent click effect from running if the click target is a navbar link
        // that will trigger a page transition, to avoid visual clash.
        if (event.target.closest('.floating-navbar a')) {
            try {
                const linkElement = event.target.closest('a');
                if (linkElement && linkElement.href) { // Ensure linkElement and its href exist
                    const linkUrl = new URL(linkElement.href, window.location.origin);
                    const currentUrl = new URL(window.location.href, window.location.origin);
                    if (linkUrl.hostname === currentUrl.hostname && linkUrl.pathname !== currentUrl.pathname) {
                        return; // It's a transitioning navbar link, so skip click effect
                    }
                }
            } catch (e) {
                // If href is not a valid URL (e.g. "javascript:void(0)" or just a hash), allow click effect
            }
        }

        const circle = document.createElement('div');
        circle.classList.add('click-circle');
        document.body.appendChild(circle);
        circle.style.left = `${event.pageX}px`;
        circle.style.top = `${event.pageY}px`;
        setTimeout(() => {
            circle.remove();
        }, 500); // Duration of the animation
    });

    // Card Cursor Glow Effect (for all cards with class .card)
    const allCards = document.querySelectorAll('.card'); // Selects all cards on any page
    allCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Page Transition Script (for navbar links)
    const navbarLinks = document.querySelectorAll('.floating-navbar ul li a');
    const bodyElement = document.body;

    navbarLinks.forEach(link => {
        try {
            const linkUrl = new URL(link.href, window.location.origin);
            const currentUrl = new URL(window.location.href, window.location.origin);

            // Only apply to actual page-changing links within the same site
            if (linkUrl.hostname === currentUrl.hostname &&
                (linkUrl.pathname !== currentUrl.pathname || linkUrl.search !== currentUrl.search)) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const destinationUrl = this.href;
                    bodyElement.classList.add('page-fade-out');
                    setTimeout(() => {
                        window.location.href = destinationUrl;
                    }, 250); // Matches pageFadeOut animation duration (0.25s)
                });
            }
        } catch (e) {
            // Handles cases where link.href might not be a full URL (e.g. just "#someId" if not properly resolved)
            // This script primarily targets full page navigations.
        }
    });

    window.addEventListener('pageshow', function(event) {
        // Remove fade-out class if page is shown from bfcache or if it was somehow set
        if (bodyElement.classList.contains('page-fade-out')) {
           bodyElement.classList.remove('page-fade-out');
        }
        // The initial CSS animation on body (pageFadeIn) should handle the fade-in.
    });

    // Contact Page Card Click Zoom Animation
    const contactCards = document.querySelectorAll('.contact-cards-container .card');
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            // Apply the pop animation
            this.classList.add('clicked-zoom-animation');

            // Remove the class after the animation completes so it can be re-triggered
            this.addEventListener('animationend', () => {
                this.classList.remove('clicked-zoom-animation');
            }, { once: true });
            // Note: If the click target is an actual link inside the card, navigation will happen.
            // The animation provides quick visual feedback.
        });
    });
});