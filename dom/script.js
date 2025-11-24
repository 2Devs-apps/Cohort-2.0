let main = document.querySelector("main");

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let div = document.createElement("div");

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let x = Math.random() * 80;
  let y = Math.random() * 80;
  let rotate = Math.random() * 360;
  div.style.height = "180px";
  div.style.width = "180px";
  div.style.position = "absolute";
  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.rotate = rotate + "deg";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

  main.appendChild(div);
});
