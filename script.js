
const solution = Math.floor(Math.random()*11)  // chiffre au hasard qu'on va designé
var count = 0;  // nombre de click sur le boutton
function function_add() {
var test = document.getElementById('test').value;  // recuperation du chiffre
document.getElementById("myDiv").innerText += " " + test + "," ;
if (count < 3) {
  if (solution != test) {
    document.getElementById('faux').innerText = "Faux";
  } else {
    document.getElementById('faux').innerText = "Félicitation! la solution est vraiment: " + test;
  }
} else {
  document.getElementById('faux').innerText ="Dommage! vous avez perdu, la vraie reponse est: " + solution;
  document.getElementById('boutton').disabled = true;
}

count++;

}
