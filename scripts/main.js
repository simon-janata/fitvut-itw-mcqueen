const header = document.querySelector("header");
const menuToggleBtn = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navbarLinks = document.querySelectorAll("nav a");
const friendsImages = document.querySelectorAll(".friend-img");
const rivalsImages = document.querySelectorAll(".rival-img");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");


// Define constants for colors
const DARK_GRAY = "#1f1f1f";
const MCQUEEN_RED = "#9f0004";

// Set initial border color for the header
header.style.borderBottom = `3px solid ${DARK_GRAY}`;


// Function to close the mobile navigation menu
const closeMobileNav = () => {
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
    menuToggleBtn.classList.remove("open");
    menuToggleBtn.setAttribute("aria-expanded", "false");
    
    // Watching the end of the menu closing animation
    const handleTransitionEnd = (event) => {
      // Check if the event is for the mobileNav and if the property that ended is "transform"
      if (event.target === mobileNav && event.propertyName === "transform") {
        if (!mobileNav.classList.contains("active")) {
          header.style.borderBottomColor = DARK_GRAY;
        }
        mobileNav.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
    
    mobileNav.addEventListener("transitionend", handleTransitionEnd);
  }
}


// Toggle mobile navigation menu
menuToggleBtn.addEventListener("click", () => {
  const isMenuActive = mobileNav.classList.contains("active");

  if (isMenuActive) {
    closeMobileNav();
  } else {
    mobileNav.classList.add("active");
    menuToggleBtn.classList.add("open");
    menuToggleBtn.setAttribute("aria-expanded", "true");
    header.style.borderBottomColor = MCQUEEN_RED;
    
    // Close the mobile navigation menu when clicking outside of it
    const closeNavOnClickOutside = (event) => {
      if (!header.contains(event.target) && !mobileNav.contains(event.target) && !menuToggleBtn.contains(event.target)) {
        closeMobileNav();
        document.removeEventListener("click", closeNavOnClickOutside);
      }
    };
    
    // Short delay to ensure the menu is open before checking for clicks outside
    setTimeout(() => {
      document.addEventListener("click", closeNavOnClickOutside);
    }, 10);
  }
});


// Smooth scroll for navbar links
// I used JavaScript instead of the classic HTML anchor link because the header is fixed and the links wouldn't move to the right position
navbarLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("data-target").substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - 50;

      // Close the mobile navigation menu if it's open
      closeMobileNav();

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});


// Set color for friends and rivals images based on data-color attribute
friendsImages.forEach(img => {
  const color = img.getAttribute("data-color");
  img.style.color = color;
});

rivalsImages.forEach(img => {
  const color = img.getAttribute("data-color");
  img.style.color = color;
});


// Scroll to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
})

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})


// Close mobile menu on window resize if the screen is wider than 768px
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && mobileNav.classList.contains("active")) {
    closeMobileNav();
  }
});
