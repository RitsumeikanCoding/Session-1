document.addEventListener("DOMContentLoaded", () => {
  const feedButton = document.getElementById("feedButton");
  const cat = document.getElementById("cat");
  const danceButton = document.getElementById("danceButton");

  feedButton.addEventListener("click", () => {
    cat.classList.remove("idle");
    cat.classList.add("feed");

    // After animation, return to idle
    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("feed");
      cat.classList.add("idle");
      cat.removeEventListener("animationend", handler);
      hunger += 3;
      //updateStatusDisplay();
    });
  });

  danceButton.addEventListener("click", () => {
    cat.classList.remove("idle");
    cat.classList.add("dance");

    // After animation, return to idle
    cat.addEventListener("animationend", function handler() {
      cat.classList.remove("dance");
      cat.classList.add("idle");
      cat.removeEventListener("animationend", handler);
    });
  });
  
  cat.addEventListener("click", () => {
    console.log("Cat sprite was clicked!");
  });

  
});
