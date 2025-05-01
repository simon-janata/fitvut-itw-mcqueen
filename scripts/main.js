const menuToggleBtn = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navbarLinks = document.querySelectorAll("nav a");
const friendsImages = document.querySelectorAll(".friend-img");
const rivalsImages = document.querySelectorAll(".rival-img");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");



// Toggle mobile navigation menu
menuToggleBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  menuToggleBtn.classList.toggle("open");

  // Edit aria-expanded attribute for accessibility
  const isExpanded = mobileNav.classList.contains("active");
  menuToggleBtn.setAttribute("aria-expanded", isExpanded);

  if (mobileNav.classList.contains("active")) {

    // Add event listener for clicks outside the navbar to close it
    const closeNavOnClickOutside = (event) => {
      // Check if the click was outside the mobileNav and menuToggleBtn
      if (!mobileNav.contains(event.target) && !menuToggleBtn.contains(event.target)) {
        // close the mobile navigation menu
        mobileNav.classList.remove("active");
        menuToggleBtn.classList.remove("open");

        // Remove the event listener to prevent memory leaks
        document.removeEventListener("click", closeNavOnClickOutside);
      }
    };

    // Add the event listener after a short delay to ensure the menu is open before checking for clicks outside
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

      mobileNav.classList.remove("active");
      menuToggleBtn.classList.remove("open");

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
    mobileNav.classList.remove("active");
    menuToggleBtn.classList.remove("open");
  }
});
