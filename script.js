document.addEventListener("DOMContentLoaded", function () {
    var pills = document.querySelectorAll(".pill");

    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        // Toggle the 'selected' class on the clicked pill
        pill.classList.toggle("selected");
      });
    });
 });
