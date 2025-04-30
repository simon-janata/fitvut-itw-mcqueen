const menuToggleBtn = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navbarLinks = document.querySelectorAll("nav a");
const friendsImages = document.querySelectorAll(".friend-img");
const rivalsImages = document.querySelectorAll(".rival-img");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");



// Na konec souboru main.js
window.addEventListener('resize', function() {
  const mobileNav = document.querySelector('.mobile-nav');
  const menuToggleBtn = document.querySelector('.menu-toggle');
  
  // Pokud jsme na desktopu a mobilní menu je aktivní, deaktivujeme ho
  if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('active');
    menuToggleBtn.classList.remove('open');
  }
});







menuToggleBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  menuToggleBtn.classList.toggle("open");

    if (mobileNav.classList.contains("active")) {
    // document.body.style.overflow = "hidden"; // Disable scrolling
  
    let viewportHeight = window.innerHeight;
    let navbarHeight = mobileNav.offsetHeight;
    
    // Přidat event listener pro kliknutí kdekoliv na stránce
    const closeNavOnClickOutside = (event) => {
      // Zkontroluje, zda kliknutí bylo mimo navbar a mimo toggle tlačítko
      if (!mobileNav.contains(event.target) && 
          !menuToggleBtn.contains(event.target)) {
        // Zavřít navbar
        mobileNav.classList.remove("active");
        menuToggleBtn.classList.remove("open");
        
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

      mobileNav.classList.remove("active");
      menuToggleBtn.classList.remove("open");

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
