// ===============================
// TYPING ANIMATION
// ===============================

const texts = [
  "Full Stack Developer",
  "Frontend Developer",
  "React.js Developer",
  
];

let speed = 120;
let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

  if (charIndex < texts[textIndex].length) {

    typingElement.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeText, speed);

  } else {

    setTimeout(deleteText, 1500);

  }
}

function deleteText() {

  if (charIndex > 0) {

    typingElement.textContent =
      texts[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(deleteText, 60);

  } else {

    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    setTimeout(typeText, 300);

  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) {
    typeText();
  }
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".custom-nav");

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(2,6,23,0.95)";

    navbar.style.boxShadow =
      "0 5px 20px rgba(0,0,0,.3)";

  } else {

    navbar.style.background =
      "rgba(15,23,42,.8)";

    navbar.style.boxShadow =
      "none";
  }

});


// ===============================
// REVEAL ANIMATION
// ===============================

function revealElements() {

  const reveals =
    document.querySelectorAll(
      ".section-padding,.project-card,.certificate-card,.skill-card"
    );

  reveals.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {

      element.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealElements
);

revealElements();


// ===============================
// ADD REVEAL CLASS AUTOMATICALLY
// ===============================

document
  .querySelectorAll(
    ".section-padding,.project-card,.certificate-card,.skill-card"
  )
  .forEach((item) => {
    item.classList.add("reveal");
  });


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(
    ".navbar-nav .nav-link"
  );

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.clientHeight;

      if (
        pageYOffset >= sectionTop
      ) {
        current =
          section.getAttribute("id");
      }

    });

    navLinks.forEach((link) => {

      link.classList.remove(
        "active-link"
      );

      if (
        link.getAttribute("href") ===
        "#" + current
      ) {

        link.classList.add(
          "active-link"
        );

      }

    });

  }
);


// ===============================
// SMOOTH BUTTON HOVER
// ===============================

const buttons =
  document.querySelectorAll(
    ".btn"
  );

buttons.forEach((button) => {

  button.addEventListener(
    "mouseenter",
    () => {

      button.style.transform =
        "translateY(-4px)";

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.transform =
        "translateY(0)";

    }
  );

});


// ===============================
// HERO IMAGE ROTATION EFFECT
// ===============================

const heroImage =
  document.querySelector(
    ".hero-img"
  );

window.addEventListener(
  "mousemove",
  (e) => {

    if (!heroImage) return;

    let x =
      (window.innerWidth / 2 -
        e.pageX) /
      60;

    let y =
      (window.innerHeight / 2 -
        e.pageY) /
      60;

    heroImage.style.transform =
      `rotateY(${x}deg)
       rotateX(${-y}deg)`;

  }
);


// ===============================
// COUNTER ANIMATION
// ===============================

function animateCounter(
  element,
  target
) {

  let count = 0;

  const speed = target / 80;

  const update = () => {

    count += speed;

    if (count < target) {

      element.innerText =
        Math.floor(count);

      requestAnimationFrame(
        update
      );

    } else {

      element.innerText =
        target;

    }

  };

  update();

}


// ===============================
// OPTIONAL COUNTERS
// ===============================

const counters =
  document.querySelectorAll(
    ".counter"
  );

counters.forEach((counter) => {

  const target =
    +counter.getAttribute(
      "data-target"
    );

  animateCounter(
    counter,
    target
  );

});


// ===============================
// PRELOADER SUPPORT
// ===============================

window.addEventListener(
  "load",
  () => {

    const loader =
      document.querySelector(
        ".loader"
      );

    if (loader) {

      loader.style.opacity =
        "0";

      setTimeout(() => {

        loader.style.display =
          "none";

      }, 500);

    }

  }
);

document.getElementById("year").textContent =
new Date().getFullYear();