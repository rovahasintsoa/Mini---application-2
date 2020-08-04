const solution = Math.floor(Math.random()*11)  // chiffre au hasard qu'on va designé
var count = 0;  // nombre de click sur le bouton

function function_add() {
var test = document.getElementById('test').value;  // recuperation du chiffre
document.getElementById("myDiv").innerText += " " + test + "," ;
  if (solution != test) {
    document.getElementById('faux').innerText = "Faux";
  } else {
    document.getElementById('faux').innerText = "Félicitation! la solution est vraiment: " + test;
  }
  console.log(count)
  if (count > 1) {
    document.getElementById('btn').disabled = false;
    count = 0;    // remise à 0 le compteur pour que le bouton "affichez solution" devient grisé apres actualisation 
  } else {
    document.getElementById('btn').disabled = true;
  }
count++;
}
console.log(count);
function afficheSolution() {
  document.getElementById('sltion').innerText = "La solution est: " + solution ;
}
