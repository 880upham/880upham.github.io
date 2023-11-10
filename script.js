document.addEventListener("DOMContentLoaded", async function() {
    const textContainer = document.getElementById("text-container");
    const backgroundContainer = document.getElementById('background-container');

    backgroundContainer.classList.toggle('image1');
    await sleep(1)
    textContainer.textContent = "Are You Ready...";
    textContainer.style.opacity = "1";
    await sleep(2)
    await fadeOutAndIn()
    textContainer.textContent = "To Get Fucked?"; // Change the text content
    await sleep(3)
    await fadeOutAndIn()
    textContainer.textContent = "Get Fucked"; // Change the text content
    backgroundContainer.classList.toggle('image2');
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