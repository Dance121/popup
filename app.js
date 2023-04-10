const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#close");
const paragraph = document.querySelector('#paragraph');
const btn = document.querySelector('#btn');

window.addEventListener("scroll", () => {
  setTimeout(()=> {
    if (window.scrollY > 50) {
      popup.classList.remove("hide-container");
    }
  }, 3000);
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.onclick = function (event) {
  if (event.target !== popup && event.target !== paragraph && event.target !== btn) {
    popup.style.display = "none";
  }
};

