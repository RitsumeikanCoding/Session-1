document.addEventListener("DOMContentLoaded", () => {
  const feedButton = document.getElementById("feedButton");
  const cat = document.getElementById("cat");
  const danceButton = document.getElementById("danceButton");

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
  
  cat.addEventListener("click", () => {
    cat.classList.remove("idle");
    cat.classList.add("cry");
    disableButtons();

    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("cry");
      cat.classList.add("idle");
      enableButtons();
      cat.removeEventListener("animationend", handler)
    });
  });

});
