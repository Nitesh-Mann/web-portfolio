window.addEventListener("load", function () {
  // Get the loader element
  var loader = document.querySelector(".loader");
  window.scrollTo(0, 0);
  // Define a delay time for hiding the loader (in milliseconds)
  var loaderDelay = 500; // 2 seconds delay, adjust as needed

  // Hide the loader after the delay
  setTimeout(function () {
    loader.classList.add("hidden");
  }, loaderDelay);

  // Define GSAP animations
  var tl1 = gsap.timeline({ duration: 1 });

  tl1.from(".a1", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from(".a2", {
    scrollTrigger: {
      trigger: ".section2",
      markers: false,
      start: "0% 50%",
    },
    y: "30",
    ease: "power.in",
    opacity: 0,
    duration: 0.5,
  });

  gsap.to(".a3", {
    scrollTrigger: {
      trigger: ".section4",
      markers: false,
      start: "-10% 50%",
      scrub: true,
    },
    x: "20",
    ease: "power.in",
    duration: 2,
  });

  gsap.to(".a4", {
    scrollTrigger: {
      trigger: ".section4",
      markers: false,
      start: "-10% 50%",
      scrub: true,
    },
    x: "-250",
    ease: "power-in",
    duration: 1,
  });

  gsap.from(".footer-animation", {
    scrollTrigger: {
      trigger: ".footer",
      markers: false,
      start: "0% 50%",
    },
    scale: 0,
    ease: "bounce-in",
    duration: 0.6,
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Function to handle scroll event
function handleScroll() {
  var button = document.querySelector(".top-btn");
  var button2 = document.querySelector(".header2-btn");
  var offset = 200;

  if (window.scrollY > offset) {
    button.style.transform = "scale(1)";
    button2.style.transform = "scale(1)";
  } else {
    button.style.transform = "scale(0)";
    button2.style.transform = "scale(0)";
  }
}

// Add event listener for scroll
window.addEventListener("scroll", handleScroll);

// Check on page load if window is already at the top
window.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".top-btn");
  var button2 = document.querySelector(".header2-btn");
  var offset = 200;

  if (window.scrollY === 0) {
    button.style.transform = "scale(0)";
    button2.style.transform = "scale(0)";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("checkbox");
  var header2Menus = document.querySelector(".header2-menus");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      header2Menus.classList.add("show");
    } else {
      header2Menus.classList.remove("show");
    }
  });
});
