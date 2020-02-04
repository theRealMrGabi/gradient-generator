const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const h3 = document.querySelector('h3');
const textArea = document.querySelector('#textArea')
// const textArea = document.getElementById('#textArea');
const body = document.querySelector('.container');


function selectGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")  ";
    textArea.textContent = body.style.background + ";" ;
};

color1.addEventListener("input", selectGradient);
color2.addEventListener("input", selectGradient);

function copyField(){

        // var textField = document.querySelector('h3 #textArea');
        textArea.select();
        textArea.setAttribute('readonly', '');
        textArea.setSelectionRange(0, 99999);
        document.execCommand('copy');

        alert('color gradient copied');
};