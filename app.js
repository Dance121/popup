const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#close");

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
  if (event.target !== popup) {
    popup.style.display = "none";
  }
};

// const classAdd = () => {
//     if(window.scrollY > 50){
//         popup.classList.remove('hide-container');
//     }
// }

// console.log('hello');
