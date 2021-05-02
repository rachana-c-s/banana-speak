var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(outputDiv)


btnTranslate.addEventListener("click" ,function ClickEventHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value)
    outputDiv.innerText = "ssssssss "  + txtInput.value;
});