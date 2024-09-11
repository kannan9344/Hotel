document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleMenu = document.querySelector(".toggle-menu");
  toggleBtn.addEventListener("click", function () {
    toggleMenu.classList.toggle("active");
  });

  ScrollReveal({ reset: true });
  ScrollReveal().reveal(".about_us_image", {
    distance: "0px",
    opacity: 0,
    duration: 1000,
    easing: "ease-in",
  });
  ScrollReveal().reveal(".about_text_right_1", {
    distance: "80px",
    origin: "right",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".about_text_right_2", {
    distance: "80px",
    origin: "right",
    duration: 1000,
    delay: 200,
  });
  ScrollReveal().reveal(".service-heading", {
    distance: "80px",
    origin: "bottom",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".service-item_1", {
    distance: "80px",
    origin: "bottom",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".service-item_2", {
    distance: "80px",
    origin: "bottom",
    duration: 1000,
    delay:200,
  });
  ScrollReveal().reveal(".service-item_3", {
    distance: "80px",
    origin: "bottom",
    duration: 1000,
    delay: 300,
  });
  ScrollReveal().reveal(".service-item_4", {
    distance: "80px",
    origin: "bottom",
    duration: 1000,
    delay: 400,
  });
  ScrollReveal().reveal(".image_item", {
    distance: "80px",
    origin: "left",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".banner_text_1", {
    distance: "80px",
    origin: "left",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".banner_text_2", {
    distance: "80px",
    origin: "left",
    duration: 1000,
    delay: 200,
  });
  ScrollReveal().reveal(".banner_text_3", {
    distance: "80px",
    origin: "left",
    duration: 1000,
    delay: 300,
  });
  ScrollReveal().reveal(".text_item", {
    distance: "80px",
    origin: "right",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".banner_image", {
    distance: "80px",
    origin: "right",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".room_item_1", {
    distance: "80px",
    origin: "top",
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".room_item_2", {
    distance: "80px",
    origin: "top",
    duration: 1000,
    delay: 200,
  });
  ScrollReveal().reveal(".room_item_3", {
    distance: "80px",
    origin: "top",
    duration: 1000,
    delay: 300,
  });
  ScrollReveal().reveal(".scale_up_1", {
    scale: 0.5,
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".scale_up_2", {
    scale: 0.5,
    duration: 1000,
    delay: 200,
  });
  ScrollReveal().reveal(".scale_up_3", {
    scale: 0.5,
    duration: 1000,
    delay: 300,
  });
  ScrollReveal().reveal(".scale_up_4", {
    scale: 0.5,
    duration: 1000,
    delay: 400,
  });
  ScrollReveal().reveal(".rotate_image", {
    duration: 1000,
    rotate: {
      x: 120,
      z: 20,
    },
  });
});
