const keyAll = document.querySelectorAll(".key");

keyAll.forEach((key) => {
  key.addEventListener("click", (e) => {
    const letter = e.currentTarget.getAttribute("data-key");
    pushButton(letter);
  });
});

window.addEventListener("keydown", (e) => {
  const letter = e.key;
  pushButton(letter);
});

function pushButton(letter) {
  const audio = document.getElementById(letter);
  const key = document.querySelector(`div[data-key="${letter}"]`);
  if (audio) {
    key.classList.add("plaing");
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => key.classList.remove("plaing"), 500);
  }
};



