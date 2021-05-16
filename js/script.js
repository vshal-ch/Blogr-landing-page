let navItems = document.querySelectorAll(".item");
let menu = document.querySelector(".menu");
let hamburgur = document.querySelector(".ham-burgur");
let hamburgurImage = document.querySelector(".ham-burgur>img");

hamburgur.addEventListener("click", () => {
  menu.classList.toggle("active");
  if(menu.classList.contains('active')){
    hamburgurImage.setAttribute('src','./images/icon-close.svg');
  }
  else if(!(menu.classList.contains('active'))){
    hamburgurImage.setAttribute('src','./images/icon-hamburger.svg');
  }
});

let index;
let flag;
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    if (flag && index != i) {
      navItems[index].classList.remove("active");
    }
    navItems[i].classList.toggle("active");
    index = i;
    flag = true;
  });
}

window.addEventListener("resize", () => {
  location.reload();
  // let index;
  // let flag;
  // for (let i = 0; i < navItems.length; i++) {
  //   navItems[i].addEventListener("click", () => {
  //     if (flag && index != i) {
  //       navItems[index].classList.remove("active");
  //     }
  //     navItems[i].classList.toggle("active");
  //     index = i;
  //     flag = true;
  //   });
  // }
});


