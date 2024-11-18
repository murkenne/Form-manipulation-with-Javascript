// Connected to index2.html file

// Style header
let header = document.getElementById("header")
header.style.fontSize = "2.5rem";
header.style.color = "#007BFF";
header.style.textAlign = "center";
header.style.margin = "20px 0";
header.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
header.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";

// Style the container
let container = document.getElementById("container");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.alignItems = "center";
container.style.padding = "20px";
container.style.backgroundColor = "#f4f4f4";
container.style.border = "4px solid green";
container.style.borderRadius = "10px";

// Box style
let box = document.getElementById("box");
box.style.width = "150px";
box.style.height = "50px";
box.style.lineHeight = "50px"; // Center text vertically
box.style.textAlign = "center";
box.style.backgroundColor = "#28a745";
box.style.color = "#fff";
box.style.borderRadius = "5px";
box.style.cursor = "pointer";
box.style.transition = "background-color 0.3s ease";
// Change box color dynamically on click
function changeColor() {
    let colors = ["#007BFF", "#FFC107", "#28a745", "#DC3545"];
    let randomColors = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColors;
}

// Style the card
let card = document.getElementById("card");
card.style.width = "400px";
card.style.padding = "15px";
card.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
card.style.borderRadius = "10px";
card.style.textAlign = "center";
card.style.backgroundColor = "blue";

// Style image
let car = document.getElementById("img");
car.style.width ="100%";
car.style.height ="100px";
car.style.objectFit ="cover";
car.style.borderRadius ="5px";

let car1 = document.getElementById("img1");
car1.style.width ="100%";
car1.style.height ="100px";
car1.style.objectFit ="cover";
car1.style.borderRadius ="5px";

let car2 = document.getElementById("img2");
car2.style.width ="100%";
car2.style.height ="100px";
car2.style.objectFit ="cover";
car2.style.borderRadius ="5px";
car2.style.width = "100%";
car2.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
car2.style.marginBottom = "15px";

// Style the footer
let footer = document.getElementById("footer");
footer.style.textAlign = "center";
footer.style.padding = "10px";
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.marginTop = "20px";
footer.style.fontSize = "0.9rem";

