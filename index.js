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
      hunger = 10; // Reset hunger to 10
      updateStatusDisplay();
    });
  });

  danceButton.addEventListener("click", () => {
    cat.classList.remove("idle");
    cat.classList.add("dance");
    // Decrease hunger every second while dancing
    const danceInterval = setInterval(() => {hunger--; updateStatusDisplay();}, 1000);
    disableButtons();
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
