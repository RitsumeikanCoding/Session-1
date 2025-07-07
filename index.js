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
    disableButtons();

    document.getElementById("hunger" + hunger).style.opacity = 0.2;
    hunger--;

    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("dance");
      cat.classList.add("idle");
      enableButtons();
      cat.removeEventListener("animationend", handler);
    });
  });

  let isAnimating = false;

  cat.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;
    cat.classList.remove("idle");
    cat.classList.add("cry");
    disableButtons();

    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("cry");
      cat.classList.add("idle");
      enableButtons();
      isAnimating = false;
      cat.removeEventListener("animationend", handler)
    });
  });

  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const value = userInput.value;
      window.dispatchEvent(new CustomEvent("userInputEntered", { detail: value }));
      userInput.value = "";
    }
  });
});
