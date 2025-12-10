const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerHTML;

para.addEventListener("mouseover", () => {
  setInterval(() => {
    const str = text
      .split("")
      .map((char, index) => {
        return characters.split("")[Math.floor(Math.random() * 53)];
      })
      .join();

    para.innerHTML = str;
  }, 30);
});
