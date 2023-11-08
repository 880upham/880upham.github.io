document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");

    setTimeout(function () {
        const whitePoint = document.getElementById("white-point");
        whitePoint.style.transform = "scale(200)";

        // After 1 second, fade in the initial text
        textContainer.textContent = "Are You Ready...";
        textContainer.style.opacity = "1";

        // After 3 seconds, start fading out the initial text
        setTimeout(function () {
            textContainer.style.opacity = "0";

            // After 1 second, change the text to something else
            setTimeout(function () {
                textContainer.textContent = "To Get Fucked?"; // Change the text content

                // After 1 second, fade in the new text
                setTimeout(function () {
                    textContainer.style.opacity = "1"; // Fade in the new text
                }, 1000); // Adjust the timing as needed
            }, 1000); // Adjust the timing as needed
        }, 3000); // Adjust the timing as needed
    }, 1000);
});
