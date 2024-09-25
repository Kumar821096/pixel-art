let grid = document.getElementById("grid");
let currentColor = "#000000";
let color = document.getElementById("color");
let width = 20;
let height = 20;

let inputGrid = 20;

grid.style.gridTemplateColumns = `repeat(20,${width}px)`;
grid.style.gridTemplateRows = `repeat(20,${height}px)`;

let clearCanvas = document.getElementById("clearCanvas");
color.addEventListener("input", (event) => {
  currentColor = event.target.value;
});

for (let i = 0; i < 400; i++) {
  let pixel = document.createElement("span");
  pixel.setAttribute("id", "pixel");
  grid.appendChild(pixel);
}

grid.addEventListener("click", (event) => {
  console.dir(event);
  if (event.target && event.target.matches("span#pixel")) {
    event.target.style.backgroundColor = currentColor;
  }
});
let elements = document.querySelectorAll("#grid > span");

clearCanvas.addEventListener("click", () => {
  elements.forEach((item) => {
    item.style.backgroundColor = "#ffffff";
  });
});

document.getElementById("resizeGrid").addEventListener("input", (event) => {
  if (event.target.value <= 20) {
    inputGrid = event.target.value;
  } else {
    alert("Can not resize more");
  }
});

document.getElementById("btnResize").addEventListener("click", () => {
  grid.style.gridTemplateColumns = `repeat(20,${inputGrid}px)`;
  grid.style.gridTemplateRows = `repeat(20,${inputGrid}px)`;
});