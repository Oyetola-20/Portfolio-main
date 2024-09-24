"use strict";
let nav = document.querySelector(".list");
let buttonOpen = document.querySelector(".menu");
let butttonClose = document.querySelector(".closebtn");
let overLay = document.querySelector(".overlay");
let links = document.querySelectorAll('#nav-link');

function opennav() {
  nav.classList.remove("hidden");
  overLay.classList.remove("hidden");
}
buttonOpen.addEventListener("click", opennav);

function closenav() {
  nav.classList.add("hidden");
  overLay.classList.add("hidden");
}
butttonClose.addEventListener("click", closenav);
overLay.addEventListener("click", closenav);

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', closenav)
}

let like = document.querySelector('.fa-heart');
let comment = document.querySelector('.fa-message');
like.addEventListener('click', () =>{
  like.style.color = 'blue';
})