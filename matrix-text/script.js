const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerHTML;

let iteration = 0;

function randomText() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[Math.floor(Math.random() * 52)];
    })
    .join("");
  para.innerHTML = str;

  iteration += 0.2;
}

// setInterval(randomText, 30);

para.addEventListener("mouseover", () => {
  setInterval(randomText, 30);
});
