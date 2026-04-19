//loading screen
const loader = document.getElementById("loader");

document.body.classList.add("loading");

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("loading");
    }, 500);

  }, 800);

});




const testimonialCards = Array.from(document.querySelectorAll(".testimonial-card"));
const testimonialDots = Array.from(document.querySelectorAll(".testimonial-dot"));
let activeTestimonial = 0;
let touchStartX = 0;
let touchEndX = 0;

function setActiveTestimonial(index) {
  activeTestimonial = index;

  testimonialCards.forEach((card, i) => {
    card.classList.toggle("is-active", i === index);
  });

  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === index);
  });
}

testimonialCards.forEach((card, index) => {
  card.addEventListener("click", () => setActiveTestimonial(index));
  card.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  card.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < 30) {
      setActiveTestimonial(index);
      return;
    }

    if (diff > 30) {
      setActiveTestimonial((activeTestimonial + 1) % testimonialCards.length);
    } else if (diff < -30) {
      setActiveTestimonial((activeTestimonial - 1 + testimonialCards.length) % testimonialCards.length);
    }
  }, { passive: true });
});

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => setActiveTestimonial(index));
});

setActiveTestimonial(0);

//circle mouse blob
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach((circle, index) => {

    circle.style.left = x + "px";
    circle.style.top = y + "px";

    circle.style.transform =
      `translate(-50%, -50%) scale(${(circles.length - index) / circles.length})`;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];

    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;

  });

  requestAnimationFrame(animateCircles);
}

animateCircles();



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.removeAttribute('open');
      }
    });
  });
});
