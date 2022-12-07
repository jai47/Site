let string = document.getElementById("place");
let body = document.getElementById("bdy");
function display(num) {
    string.value += num;
}

function cal(){
    try{
        string.value = eval(string.value);
    }
    catch(err) {
        alert("Invalid request");
    }
}

function Cls(){
    string.value = "";
}

body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 16)
        Cls();
})

function Del(){
    string.value = string.value.slice(0,-1);
}

body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 13)
        cal();
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 8)
        Del();
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 96)
        display(0);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 97)
        display(1);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 98)
        display(2);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 99)
        display(3);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 100)
        display(4);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 101)
        display(5);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 102)
        display(6);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 103)
        display(7);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 104)
        display(8);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 105)
        display(9);
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 106)
        display("*");
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 107)
        display("+");
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 109)
        display("-");
})
body.addEventListener('keyup', (e) =>{
    if(e.keyCode === 111)
        display("/");
})
