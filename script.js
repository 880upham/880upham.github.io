document.addEventListener("DOMContentLoaded", async function() {
    const textContainer = document.getElementById("text-container");
    const backgroundContainer = document.getElementById('background-container');
    const textElement = document.getElementById("typewriter-text");
    const lines = textElement.innerHTML.split('<br>');
    textElement.innerHTML = "";

    backgroundContainer.classList.toggle('image1');
    await sleep(1)
    textContainer.textContent = "Are You Ready...";
    textContainer.style.opacity = "1";
    await sleep(3)
    await fadeOutAndIn()
    textContainer.textContent = "To Get Fucked?"; // Change the text content
    await sleep(4)
    await fadeOutAndIn()
    textContainer.textContent = "Get Fucked 2023"; // Change the text content
    backgroundContainer.classList.toggle('image2');

    await sleep(1)

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];

        for (let i = 0; i < line.length; i++) {
            const char = line.charAt(i);
            const span = document.createElement("span");
            span.textContent = char;
            span.style.animationDelay = `${(lineIndex * 1) + i * 0.1}s`;
            textElement.appendChild(span);
        }
        await sleep(3)

        if (lineIndex < lines.length - 1) {
            textElement.appendChild(document.createElement("br"));
        }
    }

    // Add this at the end of your existing script
    await sleep(3)
    const buttonsContainer = document.querySelector(".buttons");
    setTimeout(() => {
        buttonsContainer.style.opacity = "1";
    }, 10);
    buttonsContainer.style.display = "flex";
    

});


function sleep(d) {
    return new Promise(resolve => setTimeout(resolve, d * 1000));
}
async function fadeOutAndIn() {
    const textContainer = document.getElementById("text-container");

    await sleep(1)
    textContainer.style.opacity = "0";
    await sleep(1)
    textContainer.style.opacity = "1";
}