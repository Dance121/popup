const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#close");
let popupShown = false;


window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    popup.classList.remove("hide-container");
  }
  setTimeout(() => {
    popup.classList.add("hide-container");
  }, 3000);
//   popupShown = true;
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hide-container");
});

window.onclick = function(event){
    if(event.target !== popup){
        popup.style.display = 'none';
    }
}

// const classAdd = () => {
//     if(window.scrollY > 50){
//         popup.classList.remove('hide-container');
//     }
// }

// console.log('hello');
