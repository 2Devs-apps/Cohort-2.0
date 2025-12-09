let main = document.querySelector("main");
let board = document.querySelector(".board");

let pipes = [
  { x: 400, y: 0, topHeight: 0, bottomHeight: 0, width: 100 },
  { x: 600, y: 0, topHeight: 0, bottomHeight: 0, width: 100 },
  { x: 800, y: 0, topHeight: 0, bottomHeight: 0, width: 100 },
  { x: 1000, y: 0, topHeight: 0, bottomHeight: 0, width: 100 },
  { x: 1200, y: 0, topHeight: 0, bottomHeight: 0, width: 100 },
  { x: 1400, y: 0, topHeight: 0, bottomHeight: 0, width: 100 },
];

let bird = { x: 100, y: 200, vy: 0 };

const BOARD_HEIGHT = board.clientHeight || 600;
const PIPE_MIN = 80;
const PIPE_MAX = 320;
const PIPE_SPEED = 160; // px per second (lower => slower)
const SPAWN_MS = 400; // spawn interval in ms
const minGap = 100; // minimum space for bird
const maxGap = 200; // max random gap
const gap = randInt(minGap, maxGap);

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
birdImg.style.transform = `translate3d(${bird.x}px, ${Math.round(
  bird.y
)}px, 0)`;
birdImg.style.top = bird.y + "px";

board.appendChild(birdImg);

function renderDomPipes(newPipe) {
  let pipe = document.createElement("img");
  pipe.src = "./pipe.png";
  pipe.className = "pipe";
  pipe.style.transform = `translate3d(${Math.round(newPipe.x)}px,0,0)`;
  pipe.style.top = "auto";
  pipe.style.bottom = 0 + "px";
  pipe.style.height = newPipe.bottomHeight + "px";
  pipe.style.width = newPipe.width + "px";
  pipe.style.willChange = "transform, height";

  let upPipe = document.createElement("img");
  upPipe.src = "./pipe.png";
  upPipe.className = "upPipe";
  upPipe.style.transform = `translate3d(${Math.round(
    newPipe.x
  )}px,0,0) rotate(180deg)`;
  upPipe.style.top = 0 + "px";
  upPipe.style.bottom = "auto";
  upPipe.style.height = newPipe.topHeight + "px";
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
    const topH = randInt(PIPE_MIN, PIPE_MAX);
    const bottomH = BOARD_HEIGHT - topH - gap;
    elem.topHeight = topH;
    elem.bottomHeight = bottomH;

    renderDomPipes(elem);
  });
}

function newPipes() {
  //const boardW = board.clientWidth || 900;
  const lastPipe = pipes[pipes.length - 1];
  const newX = lastPipe.x + 200;

  const topH = randInt(PIPE_MIN, PIPE_MAX);
  const bottomH = BOARD_HEIGHT - topH - gap;

  const newPipe = {
    x: newX,
    y: 0,
    topHeight: topH,
    bottomHeight: bottomH,
    width: 100,
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

let lastTs = null;
function gameLoop(ts) {
  if (!lastTs) lastTs = ts;
  const dt = (ts - lastTs) / 1000;
  lastTs = ts;

  pipes.forEach((elem, i) => {
    elem.x -= PIPE_MIN * dt;
    const tx = Math.round(elem.x);

    if (elem.topDOM)
      elem.topDOM.style.transform = `translate3d(${tx}px,0,0) rotate(180deg)`;
    if (elem.bottomDOM)
      elem.bottomDOM.style.transform = `translate3d(${tx}px,0,0)`;

    if (elem.x + elem.width < -50) {
      removePipeAtIndex(i);
    }
  });

  const GRAVITY = 800;
  bird.vy += GRAVITY * dt;
  bird.y += bird.vy * dt;
  //bird.y = Math.min(BOARD_HEIGHT - 34, Math.max(0, bird.y));
  birdImg.style.transform = `translate3d(${bird.x}px, ${Math.round(
    bird.y
  )}px, 0)`;

  let isCrash = crash(bird.x, dt);
  console.log("isCrash", isCrash);

  requestAnimationFrame(gameLoop);
}

function crash(txi, dt) {
  let isCrash = false;
  pipes.forEach((elem) => {
    elem.x -= PIPE_MIN * dt;
    const tx = Math.round(elem.x);
    if (txi !== tx) {
      console.log("working.... ");
    } else {
      console.log("Game over");
      isCrash = true;
    }
  });
  return isCrash;
}

document.body.addEventListener("keydown", function (e) {
  bird.vy = -320;
});
board.addEventListener("click", function () {
  bird.vy = -320;
});

renderpipes();
requestAnimationFrame(gameLoop);
const spawnId = setInterval(newPipes, SPAWN_MS);
