let menu_btn = document.querySelector("#menu_btn");
let navbar = document.querySelector(".navbar");

let search_form = document.querySelector(".search_form");
let = search_btn = document.querySelector("#search_btn");

let shopping_cart = document.querySelector("#shopping_cart");
let shopping = document.querySelector(".shopping_cart");

shopping_cart.onclick = () =>{
  shopping.classList.toggle("active");
  navbar.classList.remove("active");
  search_form.classList.remove("active");
}



menu_btn.onclick = () => {
  menu_btn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  search_form.classList.remove("active");
  shopping.classList.remove("active");
  
}

search_btn.onclick = () =>{
  search_form.classList.toggle("active");
  shopping.classList.remove("active");
  navbar.classList.remove("active");

}




window.onscroll = () => {
  menu_btn.classList.remove("fa-times");
  navbar.classList.remove("active");
  search_form.classList.remove("active");
}




var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  loop: true,
  autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});