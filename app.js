var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#userInput");
var outputText = document.querySelector("#translatedOutput");
var url = "https://api.funtranslations.com/translate/pirate.json";
btnTranslate.addEventListener("click", clickHandler);
btnTranslate.addEventListener("mouseover", () => {
  btnTranslate.textContent = "☠️Translate!☠️";
});
btnTranslate.addEventListener("mouseout", () => {
  btnTranslate.textContent = "Translate!";
});
function clickHandler(event) {
  var message = inputText.value;
  var finalUrl = urlHandler(message);
  console.log(finalUrl);
  fetch(finalUrl)
    .then((response) => response.json())
    .then((json) => {
      outputText.innerText = json.contents.translated;
    })
    .catch(() => {
      {
        alert("Error occured");
      }
    });
}
function urlHandler(text) {
  var finalUrl = url + "?text=" + text;
  var encodedURL = encodeURI(finalUrl);
  return encodedURL;
}
