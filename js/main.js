const menu = document.querySelector("#menu-ico")
const list = document.querySelector(".list")
menu.onclick = function () {
    menu.classList.toggle("bx-x")
    list.classList.toggle("active")
}

const Btnright = document.querySelector(".right")
const Btnleft = document.querySelector(".left")
const array = document.querySelectorAll(".flex")
let index = 0;

function coursel(arr, Currentindex) { 
    for (let i = 0; i < arr.length; i++) {
        if (i === Currentindex) {
            arr[i].classList.add("active-1");
        } else {
            arr[i].classList.remove("active-1");
        }
    }
}

function left() { 
    let prevIndex = index;
    index = (index - 1 + array.length) % array.length;
    coursel(array, index);
    array[prevIndex].classList.remove("active-1"); 
}

function right() { 
    let prevIndex = index;
    index = (index + 1) % array.length;
    coursel(array, index);
    array[prevIndex].classList.remove("active-1"); 
}

Btnright.addEventListener("click", right);
Btnleft.addEventListener("click", left);

coursel(array, index);


