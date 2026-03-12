//Exercício 1
function sum(numberA, numberB) {
  //var aceita diferente tipo de dados
  var numberA;
  var numberB;
  var result;
  result = numberA + numberB;
  return result; //return não é obrigatório
}
//console.log(sum(1, 1));

//Exercício 2
function wasApproved(value) {
  var value;
  if (value >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
//alert(wasApproved(5));

//Exercício 3
function collectResponse() {
  var value = prompt("Digite a nota do acadêmico:");
  return confirm(wasApproved(value));
}
//collectResponse(5);

//Exercício 4
function loadMessage() {
  alert("Carreguei!");
}

var womanSurfing = "https://images.pexels.com/photos/4591752/pexels-photo-4591752.jpeg";
var menSurfing = "https://69c76b98-5a80-494c-a4fc-97c9aa2711cf.mdnplay.dev/shared-assets/images/examples/surfer.jpg";

//Exercício 5
function changeImageToWoman(value) {
  var pictureHtmlElement = value;
  console.log(pictureHtmlElement);
  pictureHtmlElement.querySelector("img").src = womanSurfing;
  pictureHtmlElement.querySelector("source").srcset = womanSurfing;
}

function changeImageToMen(value) {
  var pictureHtmlElement = value;
  pictureHtmlElement.querySelector("img").src = menSurfing;
  pictureHtmlElement.querySelector("source").srcset = menSurfing;
}
