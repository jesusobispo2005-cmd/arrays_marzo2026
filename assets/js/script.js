/*const array=["Mario", "Elisabete", "Neuza", "Melina", "Jaume", "Jesus", "Priscila","Fernando"]

console.log(array[5])

const colors = ["white", "blue", "green", "yellow", "purple"];
const select1 = document.getElementById("colores");

select1.addEventListener("change", function () {
  const index = this.value;
  document.body.style.backgroundColor = colors[index];
});

const select2 = document.getElementById("c");
const customMapping = [
  "green",  
  "blue",   
  "white",    
  "purple", 
  "yellow"  
];

for (let i = 0; i < customMapping.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  select2.appendChild(option);
}

select2.addEventListener("change", function () {
  document.body.style.backgroundColor = customMapping[this.value];
});

document.body.style.backgroundColor = colors[0];
*/

/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

let resultado = "";

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultado += "fizzbuzz ";
    } else if (i % 3 === 0) {
        resultado += "fizz ";
    } else if (i % 5 === 0) {
        resultado += "buzz ";
    } else {
        resultado += i + " ";
    }

    if (i % 20 === 0) resultado += "\n";
}

document.body.innerText = resultado;
*/


window.onload = function() {
  let a = 0;
  let b = 1;
  let texto = "";

  for (let i = 0; i < 50; i++) {
    texto += a + " ";
    let siguiente = a + b;
    a = b;
    b = siguiente;
  }

  document.getElementById("resultado").textContent = texto;
};