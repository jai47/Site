let btn = document.getElementById("btn");
let bdy = document.getElementById("body");
let hed = document.getElementById("head");
let fot = document.getElementById("foot");
let xnd = document.getElementById("xnd");
let logo_img = document.getElementById("logo_img");

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
    logo_img.classList.toggle("light_logo");
    btn.classList.toggle("active");
    // document.getElementById("mode").innerHTML = "<i class='bx bxs-sun' style='color: white;'><p class=' txt'>Mode</p><button type=' button' onclick='togglebtn()' id='btn' class='btn'><span></span></button></i>";
    bdy.classList.toggle("light_body");
    hed.classList.toggle("light_hf");
    fot.classList.toggle("light_hf");
}