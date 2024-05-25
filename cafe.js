// Wait for the DOM to fully load before running the script
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
