const cardContainers = document.querySelectorAll(".card-container");

// Get the "Randomize" button element
const randomizeButton = document.querySelector(".randomize-button");

// Add click event listener to the "Randomize" button
randomizeButton.addEventListener("click", () => {
  // Get a random index for the card containers
  const randomIndex = Math.floor(Math.random() * cardContainers.length);

  // Retrieve the corresponding card container element
  const randomCardContainer = cardContainers[randomIndex];

  // Trigger the click event on the random card container
  randomCardContainer.click();
});