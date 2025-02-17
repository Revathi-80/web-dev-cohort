window.document.write("hello from JS");

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// const darkModeBtn = document.getElementById('dark-mode-btn')
// darkModeBtn.addEventListener('click', () => {
//     changeBackgroundColor('black')
// })

// const whiteModeBtn = document.getElementById('white-mode-btn')
// whiteModeBtn.addEventListener('click', () => {
//     changeBackgroundColor('white')
// })
// console.log(darkModeBtn)

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
    const currentColor = document.body.style.backgroundColor
  if (!currentColor || currentColor === "white") {
    changeBackgroundColor("black");
    themeBtn.innerHTML = "Light Mode";
  } else {
    changeBackgroundColor("white");
    themeBtn.innerHTML = "Dark Mode";
  }
});
