let btn = document.getElementById("btn");
let bdy = document.getElementById("body");
let hed = document.getElementById("head");
let fot = document.getElementById("foot");
let xnd = document.getElementById("xnd");

let lst = document.getElementsByClassName("lst");
let txt = document.getElementsByClassName("txt");


function exapnd() {
    hed.classList.toggle("exp");
    xnd.classList.toggle("expbtn");
    btn.classList.toggle("btnmv");

    Array.from(lst).forEach(Element => {
        Element.classList.toggle("expnav");
    })
    Array.from(txt).forEach(Element => {
        Element.classList.toggle("txtvisible");
    })
}


function togglebtn() {
    btn.classList.toggle("active");
    document.getElementById("moon").classList.toggle("bxs-sun");
    document.getElementById("logo_img").classList.toggle("logo_img_dark");
    document.getElementById("content").classList.toggle("content-light");
    bdy.classList.toggle("light_body");
    hed.classList.toggle("light_hf");
    fot.classList.toggle("light_hf");
}