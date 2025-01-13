// Create multiple trail elements
const trails = [];
for (let i = 0; i < 10; i++) { // Create 10 trail elements
  const trail = document.createElement('div');
  trail.classList.add('trail');
  trail.style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out'; // Smooth transitions
  document.body.appendChild(trail);
  trails.push(trail);
}

// Variable to store the last mouse positions
let lastMousePositions = Array(10).fill({ x: 0, y: 0 });

// Variable to track if the mouse is moving
let isMouseMoving = false;

// Update the trail positions based on the mouse movement
function updateTrail() {
  trails.forEach((trail, index) => {
    const delay = index * 50; // Reduced delay for smoother animation
    setTimeout(() => {
      if (isMouseMoving) {
        trail.style.transform = `translate(${lastMousePositions[index].x}px, ${lastMousePositions[index].y}px)`;
        trail.style.opacity = 1 - (index * 0.1); // Adjust opacity to make trail longer
      } else {
        // If the mouse stops moving, reset the trail dots
        trail.style.opacity = 0; // Fade out the dots
      }
    }, delay);
  });
  requestAnimationFrame(updateTrail);
}

// Track mouse movement
document.addEventListener('mousemove', (e) => {
  isMouseMoving = true; // Set mouse moving flag to true
  lastMousePositions = [
    { x: e.clientX, y: e.clientY },
    ...lastMousePositions.slice(0, 9) // Shift previous positions
  ];

  // Reset the mouse moving flag after a short delay
  clearTimeout(window.mouseStopTimeout);
  window.mouseStopTimeout = setTimeout(() => {
    isMouseMoving = false;
  }, 100); // Adjust the delay as needed
});

// Start the trail update loop
updateTrail();

document.addEventListener('click', (e) => {
  const highlight = document.createElement('div');
  highlight.classList.add('highlight');
  highlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  document.body.appendChild(highlight);
  setTimeout(() => {
    highlight.remove();
  }, 500);
});