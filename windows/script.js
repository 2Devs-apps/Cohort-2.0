const windowBtn = document.querySelector("#windowBtn");
const windowPopup = document.querySelector(".windowPopup");
const main = document.querySelector(".window");
const mainScreen = document.querySelector(".mainScreen");
const sidePopup = document.querySelector(".sidePopup");
let isSidePopup = false;

let isOpen = false;

windowBtn.addEventListener("click", () => {
  if (!isOpen) {
    const btnRect = windowBtn.getBoundingClientRect();
    windowPopup.style.left =
      btnRect.left + btnRect.width - windowPopup.offsetWidth + "px";
    windowPopup.style.bottom = "3.5rem";

    windowPopup.style.display = "block";
    isOpen = true;
    sidePopup.style.display = "none";
    isSidePopup = false;
  } else {
    windowPopup.style.display = "none";
    isOpen = false;
  }
});

main.addEventListener("contextmenu", (eve) => {
  if (!isSidePopup) {
    sidePopup.style.left = eve.clientX + "px";
    sidePopup.style.top = eve.clientY + "px";

    sidePopup.style.display = "block";
    windowPopup.style.display = "none";
    isOpen = false;
    isSidePopup = true;
  } else {
    sidePopup.style.display = "none";
    isSidePopup = false;
  }
});

mainScreen.addEventListener("click", (eve) => {
  console.log("isOpen =>", isOpen);
  if (isOpen) {
    windowPopup.style.display = "none";
    isOpen = false;
  } else if (sidePopup) {
    sidePopup.style.display = "none";
    isSidePopup = false;
  }
});
