const menuToggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector("nav");
const navbarLinks = document.querySelectorAll("nav a");
const friendsImages = document.querySelectorAll(".friend-img");
const rivalsImages = document.querySelectorAll(".rival-img");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");



menuToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggleBtn.classList.toggle("active");

    if (navbar.classList.contains("active")) {
    // document.body.style.overflow = "hidden"; // Disable scrolling
  
    let viewportHeight = window.innerHeight;
    let navbarHeight = navbar.offsetHeight;
    
    // Přidat event listener pro kliknutí kdekoliv na stránce
    const closeNavOnClickOutside = (event) => {
      // Zkontroluje, zda kliknutí bylo mimo navbar a mimo toggle tlačítko
      if (!navbar.contains(event.target) && 
          !menuToggleBtn.contains(event.target)) {
        // Zavřít navbar
        navbar.classList.remove("active");
        menuToggleBtn.classList.remove("active");
        
        // Odstranit tento event listener po zavření navbaru
        document.removeEventListener('click', closeNavOnClickOutside);
      }
    };
    
    // Použít setTimeout, aby se event nezaregistroval hned (předejdeme zavření menu hned po otevření)
    setTimeout(() => {
      document.addEventListener('click', closeNavOnClickOutside);
    }, 10);
  }
});




navbarLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("data-target").substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - 50;

      navbar.classList.remove("active");
      menuToggleBtn.classList.remove("active");

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});


friendsImages.forEach(img => {
  const color = img.getAttribute("data-color");
  img.style.color = color;
});

rivalsImages.forEach(img => {
  const color = img.getAttribute("data-color");
  img.style.color = color;
});


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
