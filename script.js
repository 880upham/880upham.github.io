document.addEventListener("DOMContentLoaded", async function () {
  const textContainer = document.getElementById("text-container");
  const backgroundContainer = document.getElementById("background-container");
  const textElement = document.getElementById("typewriter-text");
  // const lines = [
  //   "🌈 In 👄📥 the whimsical land 🇦🇲 of Upham, ",
  //   "a 👙 celebration 🙌 🎉 awaits",
  //   "🕝🕑🕞 on 🔛 December 2nd ✌️ ",
  //   "🌄 Unveil the secret location 📍 🗺️ by ",
  //   "😡 asking AI daddy 😍 4 💦 addy and ",
  //   "🤡 bring 🤲 a stranger 👭 ",
  //   "along 💁🔚 for ❓ the fun 🈷️💦🔣🍣 😄🚀👫 ",
  //   "Are you 👀 ready? 🌺 🎁🎊💃",
  // ];
  // textElement.innerHTML = "";

  backgroundContainer.classList.toggle("image1");
  await sleep(1);
  textContainer.textContent = "Are You Ready...";
  textContainer.style.opacity = "1";
  await sleep(3);
  await fadeOutAndIn();
  textContainer.textContent = "To Get Fucked?"; // Change the text content
  await sleep(4);
  await fadeOutAndIn();
  textContainer.textContent = "Get Fucked 2023"; // Change the text content
  backgroundContainer.classList.toggle("image2");

  await sleep(1);

  for (let lineIndex = 1; lineIndex < 9; lineIndex++) {
    const el = document.querySelector("#z-" + lineIndex)
    el.style.display = "block"
    el.style.opacity = 1
    // const line = lines[lineIndex];
    // line.
    // for (let i = 0; i < line.length; i++) {
    //   const char = line[i];
    //   console.log(`char:`, char);
    //   const span = document.createElement("span");
    //   span.innerHTML = `${char}`;
    //   span.style.animationDelay = `${lineIndex * 0.5 + i * 0.05}s`; // Adjust the values for faster animation
    //   textElement.appendChild(span);
    // }
    await sleep(1.5);

    // if (lineIndex < lines.length - 1) {
    //   textElement.appendChild(document.createElement("br"));
    // }
  }

  // Add this at the end of your existing script
  await sleep(2);
  const buttonsContainer = document.querySelector(".buttons");
  buttonsContainer.style.opacity = "1";
  buttonsContainer.style.display = "flex";
  // Add click event listeners to the buttons for redirection
  // document.getElementById("button1").addEventListener("click", function() {
  //     window.location.href = "main.html"; // Replace with the actual URL
  // });

  // document.getElementById("button2").addEventListener("click", function() {
  //     window.location.href = "main.html"; // Replace with the actual URL
  // });
});

function sleep(d) {
  const fast = true;
  // const fast = false;
  return new Promise((resolve) => setTimeout(resolve, d * (fast ? 300 : 1000)));
}
async function fadeOutAndIn() {
  const textContainer = document.getElementById("text-container");

  await sleep(1);
  textContainer.style.opacity = "0";
  await sleep(1);
  textContainer.style.opacity = "1";
}
