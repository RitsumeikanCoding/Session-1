document.addEventListener("DOMContentLoaded", () => {
  const feedButton = document.getElementById("feedButton");
  const cat = document.getElementById("cat");
  const danceButton = document.getElementById("danceButton");
  const userInput = document.getElementById("userInput");

  function disableButtons() {
    feedButton.disabled = true;
    danceButton.disabled = true;
  }

  function enableButtons() {
    feedButton.disabled = false;
    danceButton.disabled = false;
  }

  feedButton.addEventListener("click", () => {
    cat.classList.remove("idle");
    cat.classList.add("feed");
    disableButtons();

    // After animation, return to idle
    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("feed");
      cat.classList.add("idle");
      enableButtons();
      cat.removeEventListener("animationend", handler);
    });
  });

  danceButton.addEventListener("click", () => {
    cat.classList.remove("idle");
    cat.classList.add("dance");
    disableButtons();

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
