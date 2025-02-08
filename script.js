// script.js
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Text Animation Script
const textAnimation = document.getElementById('text-animation');
const messages = ["Web Developer","Mobile App Developer", "Content creator", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const typeText = () => {
  const currentMessage = messages[index];
  if (isDeleting) {
    textAnimation.textContent = currentMessage.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textAnimation.textContent = currentMessage.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentMessage.length) {
    isDeleting = true;
    setTimeout(typeText, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % messages.length; // Move to the next message
    setTimeout(typeText, 500); // Pause before typing next message
  } else {
    setTimeout(typeText, 100); // Typing speed
  }
};

typeText(); // Start the animation