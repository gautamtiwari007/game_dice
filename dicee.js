function select() {
    var num1 = Math.floor(Math.random() * 6);
    var num2 = Math.floor(Math.random() * 6);

    var dice_images = new Array();

    dice_images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    document.getElementById("img1").src = dice_images[num1];
    document.getElementById("img2").src = dice_images[num2];

    if (num1 > num2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    } else if (num1 < num2) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").textContent = "🚩 Draw! 🚩";
    }
}