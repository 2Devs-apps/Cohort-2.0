let main = document.querySelector("main");
let board = document.querySelector(".board");

let pipes = [
  { x: 400, y: 0, topHeight: 0, bottomheight: 0, width: 100 },
  { x: 600, y: 0, topHeight: 0, bottomheight: 0, width: 100 },
  { x: 800, y: 0, topHeight: 0, bottomheight: 0, width: 100 },
  { x: 1000, y: 0, topHeight: 0, bottomheight: 0, width: 100 },
  { x: 1200, y: 0, topHeight: 0, bottomheight: 0, width: 100 },
  { x: 1400, y: 0, topHeight: 0, bottomheight: 0, width: 100 },
];

let bird = { x: 100, y: 200 };

const BOARD_HEIGHT = board.clientHeight;
const GAP = 180;
const PIPE_MIN = 80;
const PIPE_MAX = 320;
const PIPE_SPEED = 160; // px per second (lower => slower)
const SPAWN_MS = 400; // spawn interval in ms

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

const birdImg = document.createElement("img");
birdImg.src = "./flapBird.png";
birdImg.className = "birdImg";
birdImg.style.position = "absolute";
birdImg.style.width = "48px";
birdImg.style.height = "34px";
birdImg.style.willChange = "transform";
birdImg.style.pointerEvents = "none";
birdImg.style.left = bird.x + "px";
// birdImg.style.transform = `translate3d(${bird.x}px, ${Math.round(
//   bird.y
// )}px, 0)`;
birdImg.style.top = bird.y + "px";

board.appendChild(birdImg);

function renderBird() {
  bird.y += 20;
  birdImg.style.left = bird.x + "px";
  birdImg.style.top = bird.y + "px";
}

function renderDomPipes(newPipe) {
  const topHeight = clamp(randInt(PIPE_MIN, PIPE_MAX), PIPE_MIN, PIPE_MAX);
  const bottomHeight = BOARD_HEIGHT - topHeight - GAP;

  let pipe = document.createElement("img");
  pipe.src = "./pipe.png";
  pipe.className = "pipe";
  pipe.style.left = newPipe.x + "px";
  // pipe.style.transform = `translate3d(${Math.round(newPipe.x)}px,0,0)`;
  pipe.style.top = "auto";
  pipe.style.bottom = 0 + "px";
  pipe.style.height = bottomHeight + "px";
  pipe.style.width = newPipe.width + "px";
  pipe.style.willChange = "transform, height";

  let upPipe = document.createElement("img");
  upPipe.src = "./pipe.png";
  upPipe.className = "upPipe";
  upPipe.style.left = newPipe.x + 200 + "px";
  // upPipe.style.transform = `translate3d(${Math.round(
  //   newPipe.x
  // )}px,0,0) rotate(180deg)`;
  upPipe.style.top = 0 + "px";
  upPipe.style.bottom = "auto";
  upPipe.style.height = topHeight + "px";
  upPipe.style.width = newPipe.width + "px";
  upPipe.style.willChange = "transform, height";

  upPipe.style.transform = "rotate(180deg)";

  newPipe.topDOM = upPipe;
  newPipe.bottomDOM = pipe;

  board.appendChild(upPipe);
  board.appendChild(pipe);
}

function renderpipes() {
  pipes.forEach((elem) => {
    renderDomPipes(elem);
  });
}

function newPipes() {
  let newPipe = {
    x: pipes[pipes.length - 1].x + 200,
    y: 0,
    topHeight: 0,
    bottomheight: 0,
    width: 100,
    type: "newArray",
  };

  renderDomPipes(newPipe);

  pipes.push(newPipe);
}

function removePipeAtIndex(i) {
  const p = pipes[i];
  if (p.topDOM && p.topDOM.parentNode)
    p.topDOM.parentNode.removeChild(p.topDOM);
  if (p.bottomDOM && p.bottomDOM.parentNode)
    p.bottomDOM.parentNode.removeChild(p.bottomDOM);
  pipes.splice(i, 1);
}

function updatedPipeArray() {
  pipes.forEach((elem, i) => {
    elem.x -= 20;
    if (elem.x + elem.width < -50) {
      removePipeAtIndex(i);
    } else {
      elem.topDOM.style.left = elem.x + "px";
      elem.bottomDOM.style.left = elem.x + "px";
    }
  });
}

document.body.addEventListener("keydown", function (e) {
  bird.y -= 40;
  birdImg.style.left = bird.x + "px";
  birdImg.style.top = bird.y + "px";
});

renderpipes();

setInterval(function () {
  if (bird.y <= 700) {
    renderBird();
    updatedPipeArray();
    newPipes();
  }
}, 300);
