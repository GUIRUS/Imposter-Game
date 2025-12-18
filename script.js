// Get references to elements
// WHEN GETTING CLASSES ALWAYS ADD "." BEFORE (REALLY ANNOYING)
const pickPlayerBox = document.querySelector(".pick-player");
const pickCategoryBox = document.querySelector(".pick-categorie");
const mainScreen = document.getElementById("main-screen");
const playerScreen = document.getElementById("player-screen");
const categoryScreen = document.getElementById("category-screen")
const backButton = document.getElementById("back-to-main");
const backButtoncat = document.getElementById("back-to-main2")
const addPlayerButton = document.getElementById("add-player");
const playerOptions = document.querySelector(".player-options");

let playerCount = 3;   // base amount of players  
const maxPlayers = 6;  // maximum amount of players

pickPlayerBox.addEventListener("click", () => {
    //when pick players is clciked, hide main menu
    mainScreen.style.display = "none";
    // show player amount picker screen thing
    playerScreen.style.display = "block";
});

pickCategoryBox.addEventListener("click", () => {
   // hide main menu
    mainScreen.style.display = "none";
    // show category picker
    categoryScreen.style.display = "block";
});

backButton.addEventListener("click", () => {
    // When clicking back button, return to main menu
    playerScreen.style.display = "none";
    // Hide player picker screen
    mainScreen.style.display = "block";
});

backButtoncat.addEventListener("click", () => {
    categoryScreen.style.display = "none";
    mainScreen.style.display = "block";
});

addPlayerButton.addEventListener("click", () => {
    // If at maximum amount of players, don't allow the "Add player" button to function anymore.
    if (playerCount >= maxPlayers) {
        return; 
    }

    playerCount++; // Increase player count everytime button is pressed

    // Create a new player with the current player count.
    const newBox = document.createElement("div");
    newBox.className = "player-box";
    newBox.textContent = `Player ${playerCount}`;

    playerOptions.appendChild(newBox); //Add a new Player box

    
    if (playerCount >= maxPlayers) {
        // Button is no longer useable
        addPlayerButton.disabled = true;
        // Change text to "Max players reached"
        addPlayerButton.textContent = "Max players reached";
    }
});