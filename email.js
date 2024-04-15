"use strict";
const input = document.querySelector(".form__input-box");
const formLabel2 = document.querySelector(".form__label-2");
const main = document.querySelector(".main");
const main2 = document.querySelector(".main-2");
function checkIt() {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(input.value)) {
        main.classList.toggle("hidden");
        main2.classList.toggle("hidden");
    } else {
        formLabel2.style.display = "inline";
    }
}
