// Hero Slider
document.addEventListener("DOMContentLoaded", function () {
  const videoFrame = document.getElementById("video-frame");

  setTimeout(() => {
    videoFrame.src += "&autoplay=1"; // Start autoplay
  }, 3000); // Adjust delay time according to your preference
});

// Navbar dropdown menu
document.addEventListener("DOMContentLoaded", function () {
  const surgeriesDropdown = document.querySelector(".group");
  surgeriesDropdown.addEventListener("mouseover", function () {
    this.querySelector("ul").classList.remove("hidden");
  });
  surgeriesDropdown.addEventListener("mouseout", function () {
    this.querySelector("ul").classList.add("hidden");
  });
});

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");
    const plusMinusIcon = title.querySelector(".plus-minus");

    title.addEventListener("click", () => {
      item.classList.toggle("active");
      content.classList.toggle("hidden");
      plusMinusIcon.classList.toggle("fa-plus");
      plusMinusIcon.classList.toggle("fa-minus");
    });
  });
});
// Language switcher
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// Load Google Translate script
function loadGoogleTranslateScript(selectedLanguage) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(script);
}

// mobile settings
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

// Testimonial
document.addEventListener("DOMContentLoaded", function () {
  const testimonialContainers = document.querySelectorAll(".testimonial-container");
  const totalTestimonials = testimonialContainers.length;

  // Initialize the first two testimonials as visible
  for (let i = 0; i < 2; i++) {
    testimonialContainers[i].classList.add("visible");
  }

  function showNextTestimonials() {
    const visibleContainers = document.querySelectorAll(".testimonial-container.visible");

    for (const container of visibleContainers) {
      container.classList.remove("visible");
    }

    for (let i = 0; i < 2; i++) {
      const nextIndex = (currentTestimonialIndex + i + 1) % totalTestimonials;
      const nextContainer = testimonialContainers[nextIndex];
      nextContainer.classList.add("visible");
    }

    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
  }

  let currentTestimonialIndex = 0;
  setInterval(showNextTestimonials, 3000);
});