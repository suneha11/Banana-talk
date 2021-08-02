var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText="ajjaaajxb "+textInput.value;
};

buttonTranslate.addEventListener("click",clickHandler )

