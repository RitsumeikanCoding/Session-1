document.addEventListener("DOMContentLoaded", () => {
  const feedButton = document.getElementById("feedButton");
  const cat = document.getElementById("cat");
  const danceButton = document.getElementById("danceButton");
  const userInput = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");

  let hunger = 3;

  function disableButtons() {
    feedButton.disabled = true;
    danceButton.disabled = true;
  }

  function enableButtons() {
    feedButton.disabled = false;
    danceButton.disabled = false;
  }

  feedButton.addEventListener("click", () => {
    if (hunger >= 3) {
      responseBox.style.visibility = "visible";
      responseBox.style.opacity = "1";
      responseBox.textContent = "I'm like a baloon mate";
      clearTimeout(responseBox._hideTimeout);
      responseBox._hideTimeout = setTimeout(() => {
        responseBox.style.visibility = "hidden";
        responseBox.style.opacity = "0";
        responseBox.textContent = "";
      }, 6000);
      return;
    }
    cat.classList.remove("idle");
    cat.classList.add("feed");
    disableButtons();

    hunger++;
    document.getElementById("hunger" + hunger).style.opacity = 1;


    // After animation, return to idle
    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("feed");
      cat.classList.add("idle");
      enableButtons();
      cat.removeEventListener("animationend", handler);
      hunger = 10; // Reset hunger to 10
      updateStatusDisplay();
    });
  });

  danceButton.addEventListener("click", () => {7
     if (hunger <= 0) {
      responseBox.style.visibility = "visible";
      responseBox.style.opacity = "1";
      responseBox.textContent = "I'm starving, you monster!";
      clearTimeout(responseBox._hideTimeout);
      responseBox._hideTimeout = setTimeout(() => {
        responseBox.style.visibility = "hidden";
        responseBox.style.opacity = "0";
        responseBox.textContent = "";
      }, 6000);
      return;
    }
    cat.classList.remove("idle");
    cat.classList.add("dance");
    // Decrease hunger every second while dancing
    const danceInterval = setInterval(() => {hunger--; updateStatusDisplay();}, 1000);
    disableButtons();

    document.getElementById("hunger" + hunger).style.opacity = 0.2;
    hunger--;

    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("dance");
      cat.classList.add("idle");
      enableButtons();
      cat.removeEventListener("animationend", handler);
      clearInterval(danceInterval);
    });
  });

  let isAnimating = false;

  cat.addEventListener("click", () => {
    console.log("Cat sprite was clicked!");
  });

});

