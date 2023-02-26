var buttons = document.getElementsByClassName('button');
var resultField = document.getElementById('result-field');

function handleButton(event) {
    resultField.innerText = resultField.innerText + event.target.innerText;
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButton);
}