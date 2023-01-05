let string = document.getElementById("place");
let body = document.getElementById("bdy");
function display(num) {
    string.value += num;
}

function cal() {
    try {
        if (string.value.includes("%")) {
            let ans = Number(string.value.slice(0, string.value.indexOf("%"))) * Number(string.value.slice(string.value.indexOf("%") + 1)) / 100;
            string.value = ans;
        }
        string.value = eval(string.value);
    }
    catch (err) {
        alert("Invalid request");
    }
}

function Cls() {
    string.value = "";
}

function Del() {
    string.value = string.value.slice(0, -1);
}

body.addEventListener('keyup', (e) => {
    let y = e.keyCode;
    switch (y) {
        case 8:
            Del();
            break;
        case 13:
            cal();
            break;
        case 16:
            Cls();
            break;
        case 96:
            display(0);
            break;
        case 97:
            display(1);
            break;
        case 98:
            display(2);
            break;
        case 99:
            display(3);
            break;
        case 100:
            display(4);
            break;
        case 101:
            display(5);
            break;
        case 102:
            display(6);
            break;
        case 103:
            display(7);
            break;
        case 104:
            display(8);
            break;
        case 105:
            display(9);
            break;
        case 106:
            display("*");
            break;
        case 107:
            display("+");
            break;
        case 109:
            display("-");
            break;
        case 111:
            display("/");
            break;
        default:
            alert("Invalid Keystroke");
    }
})