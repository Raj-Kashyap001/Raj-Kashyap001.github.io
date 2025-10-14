// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);

// Update icon visibility based on current theme
if (currentTheme === "dark") {
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Toggle icons
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
};

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener("scroll", revealOnScroll);

// Header Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 4px 20px var(--shadow)";
  } else {
    header.style.boxShadow = "0 2px 10px var(--shadow)";
  }
});

// Form Submission Handler
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert(
      `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`
    );

    // Reset form
    contactForm.reset();
  });
}

// Add animation to service cards on hover
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Typing Effect for Hero Section (Optional Enhancement)
const typingText = document.querySelector(".hero-text h2");
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = "";
  let i = 0;

  const typeWriter = () => {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  // Start typing effect after page loads
  setTimeout(typeWriter, 1000);
}

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-image");

  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Project Card Hover Effect
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const overlay = this.querySelector(".project-overlay");
    if (overlay) {
      overlay.style.opacity = "1";
    }
  });

  card.addEventListener("mouseleave", function () {
    const overlay = this.querySelector(".project-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
    }
  });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple effect dynamically
const style = document.createElement("style");
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Counter Animation for Stats (if you want to add stats section)
const animateCounter = (element, target, duration) => {
  let current = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
};

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Add active class style
const navStyle = document.createElement("style");
navStyle.textContent = `
    .nav-links a.active {
        color: var(--accent);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(navStyle);

// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navLinksMobile = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinksMobile.classList.toggle("mobile");
  navLinksMobile.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinksMobile.classList.contains("mobile")) {
      navLinksMobile.classList.remove("mobile", "active");
      hamburger.classList.remove("active");
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !hamburger.contains(e.target) &&
    !navLinksMobile.contains(e.target) &&
    navLinksMobile.classList.contains("mobile")
  ) {
    navLinksMobile.classList.remove("mobile", "active");
    hamburger.classList.remove("active");
  }
});

// Prevent closing when clicking inside the mobile menu
navLinksMobile.addEventListener("click", (e) => {
  e.stopPropagation();
});
