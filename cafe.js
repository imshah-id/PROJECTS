`use strict`;
console.log(document.querySelector(".homeBtn"));
document.addEventListener("DOMContentLoaded", function () {
  // Get all dropdown buttons
  var dropdownBtns = document.querySelectorAll(".dropbtn");

  // Iterate over each dropdown button
  dropdownBtns.forEach(function (btn) {
    // Add event listener for mouseenter event
    btn.addEventListener("mouseenter", function () {
      // Get the corresponding dropdown content
      var dropdownContent = this.nextElementSibling;

      // Display the dropdown content
      dropdownContent.style.display = "block";
    });

    // Add event listener for mouseleave event
    btn.addEventListener("mouseleave", function () {
      // Get the corresponding dropdown content
      var dropdownContent = this.nextElementSibling;

      // Hide the dropdown content
      dropdownContent.style.display = "none";
    });
  });
});
let contactForm = document.querySelector(".contactPage");
let homePage = document.querySelector(".homePage");
let menu = document.querySelector(".menuPage");

document.querySelector(".homeBtn").addEventListener("click", function () {
  menu.classList.add("hidden");
  homePage.classList.remove("hidden");
  contactForm.classList.add("hidden");
});

document.querySelector(".menuBtn").addEventListener("click", function () {
  menu.classList.remove("hidden");
  contactForm.classList.add("hidden");
  homePage.classList.add("hidden");
});
document.querySelector(".contactBtn").addEventListener("click", function () {
  contactForm.classList.remove("hidden");
  menu.classList.add("hidden");
  homePage.classList.add("hidden");
});
