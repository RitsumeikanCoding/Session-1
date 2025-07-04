//Track the cats hunger and health in a 10 point scale. The hunger decays by 1 every 3 seconds, after hunger reaches 0 the cat will take health damage of 1 every 3 seconds until it reaches 0 health, at which point the cat will die.
  let hunger = 10;
  let health = 10;

  setInterval(() => {
    if (hunger > 0) {
      hunger--;
    } else if (health > 0) {
      health--;
      //add a damage event to the cat sprite when health is lost
      const cat = document.getElementById("cat");
      cat.classList.add("damaged");
    }

    if (health === 0) {
      console.log("The cat has died.");
      clearInterval(this);
    }
  }, 3000);

  // Display the hunger and health values in the center of the screen above the cat sprite represented by a heart.png and a food.png image.
  //number of images should be equal to the hunger and health values respectively.
  const hungerContainer = document.createElement("div");
  hungerContainer.style.position = "absolute";
  hungerContainer.style.top = "10%";
  hungerContainer.style.left = "50%";
  hungerContainer.style.transform = "translate(-50%, -50%)";
  hungerContainer.style.zIndex = "10";
  hungerContainer.style.textAlign = "center";

  const healthContainer = document.createElement("div");
  healthContainer.style.position = "absolute";
  healthContainer.style.top = "5%";
  healthContainer.style.left = "50%";
  healthContainer.style.transform = "translate(-50%, -50%)";
  healthContainer.style.zIndex = "10";
  healthContainer.style.textAlign = "center";
  healthContainer.style.textDecorationColor = "red";
  //separate the health images from each other with padding


  document.body.appendChild(hungerContainer);
  document.body.appendChild(healthContainer);

  function updateStatusDisplay() {
    hungerContainer.innerHTML = "";
    healthContainer.innerHTML = "";

    //For hunger, use food.png
    for (let i = 0; i < hunger; i++) {
      const img = document.createElement("img");
      img.src = "food.png";
      img.alt = "Hunger";
      img.style.height = "50px";
      hungerContainer.appendChild(img);
    }

    //For health, use heart.png
    for (let i = 0; i < health; i++) {
      const img = document.createElement("img");
      img.src = "heart.png";
      img.alt = "Health";
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.padding = "2px";
      healthContainer.appendChild(img);
    }

  }

  updateStatusDisplay();
  setInterval(updateStatusDisplay, 3000);
//Comment to force commit.
