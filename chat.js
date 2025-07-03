window.addEventListener("userInputEntered", async function(e) {
  const inputValue = e.detail;
  console.log("User:", inputValue);

  const responseBox = document.getElementById("responseBox");

  try {
    const response = await fetch("https://7zvm9pw42xsgho-8000.proxy.runpod.net/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: inputValue })
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("OpenAI Response:", data);

    // Show response box and set text
    responseBox.style.visibility = "visible";
    responseBox.style.opacity = "1";
    responseBox.textContent = data.reply || "No response";

    // Clear after 6 seconds
    clearTimeout(responseBox._hideTimeout);
    responseBox._hideTimeout = setTimeout(() => {
      responseBox.style.visibility = "hidden";
      responseBox.style.opacity = "0";
      responseBox.textContent = "";
    }, 6000);
  } catch (error) {
    console.error("Error communicating with backend:", error);
    responseBox.style.visibility = "visible";
    responseBox.style.opacity = "1";
    responseBox.textContent = "Error: " + error.message;
    clearTimeout(responseBox._hideTimeout);
    responseBox._hideTimeout = setTimeout(() => {
      responseBox.style.visibility = "hidden";
      responseBox.style.opacity = "0";
      responseBox.textContent = "";
    }, 6000);
  }
});

