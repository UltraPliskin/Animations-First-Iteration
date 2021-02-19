let canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;

let context = canvas.getContext("2d");

let size = 10;
let minSize = 10;
let maxSize = 75;
let isShrinking = false;

function computation() {
  if (isShrinking) {
    size -= 2;
  } else {
    size += 2;
  }

  if (size < minSize) {
    isShrinking = false;
  }
  if (size > maxSize) {
    isShrinking = true;
  }
}

function animate() {
  computation();

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(250, 250, size, 0, 2 * Math.PI, false);
  context.stroke();

  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);