document.addEventListener("DOMContentLoaded", function () {
    // Toggle selected class for pills
    var pills = document.querySelectorAll(".pill");
    pills.forEach(function (pill) {
        pill.addEventListener("click", function () {
            pill.classList.toggle("selected");
        });
    });

    // Get the section header container
    const sectionHeaderContainer = document.querySelector(".section-header-container");

    // Get all the content divs
    const contentDivs = document.querySelectorAll(".content");

    // Show default content (Labs)
    const defaultContent = document.getElementById("labs-content");
    if (defaultContent) {
        defaultContent.style.display = "block";
    }

    // Add a click event listener to the section header container
    sectionHeaderContainer.addEventListener("click", function (event) {
        // Check if the clicked element is a section header
        if (event.target.classList.contains("section-header")) {
            // Get the ID of the corresponding content div
            const contentId = event.target.textContent.toLowerCase() + "-content";

            // Hide all content divs
            contentDivs.forEach(function (div) {
                div.style.display = "none";
            });

            // Show the selected content div
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = "block";
            }
        }
    });

    var theme = document.getElementById("theme");
    var help = document.getElementById("help");
    var notification = document.getElementById("notification");
    var chat = document.getElementById("chat");
    var user = document.getElementById("user");
    var menu = document.getElementById("menu");

    theme.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")){
            theme.src = "images/sun.png";
            help.src = "images/help-darkmd.png";
            notification.src = "images/notification-darkmd.png";
            chat.src = "images/chat-dark-md.png";
            user.src = "images/user-dark-md.png";
            menu.src = "images/hamburger-dark.png";
        }else{
            theme.src = "images/moon.png";
            help.src = "images/help-light.png";
            notification.src = "images/notification-light.png";
            chat.src = "images/chat-light.png";
            user.src = "images/user-light.png";
            menu.src = "images/hamburger-light.png";
            
        }
        
        
    }

});
