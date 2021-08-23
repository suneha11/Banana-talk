var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL ="https://api.funtranslations.com/translate/shakespeare.json"

// var serverURL="https://api.funtranslations.com/translate/shakespeare.json?"

function getTranslationURL(text) {
    
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("Something wrong in server : Try again after sometime.")
}

function clickHandler(){
    
    var inputText = textInput.value; //taking input

   //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
            })
        .catch(errorHandler)

}; 

buttonTranslate.addEventListener("click",clickHandler )

