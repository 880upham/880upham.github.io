document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");

        // After 1 second, fade in the initial text
        textContainer.textContent = "Are You Ready...";
        setTimeout(function () {
            textContainer.style.opacity = "1";
        }, 1000);

        // After 5 seconds, change the text to something else
        setTimeout(function () {
            textContainer.style.opacity = "0"; // Fade out the text
            setTimeout(function () {
                textContainer.textContent = "To Get Fucked?"; // Change the text content
                textContainer.style.opacity = "1"; // Fade in the new text
            }, 1000); // Adjust the timing as needed
        }, 2000);

    setTimeout(function () {
        const whitePoint = document.getElementById("white-point");
        whitePoint.style.transform = "scale(200)";

        // After animation, remove the black screen
        setTimeout(function () {
            document.querySelector(".black-screen").style.display = "none";
        }, 7000); // Adjust the timing as needed
    }, 5000);
});
