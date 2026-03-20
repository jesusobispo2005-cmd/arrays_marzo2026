const array=["Mario", "Elisabete", "Neuza", "Melina", "Jaume", "Jesus", "Priscila","Fernando"]

console.log(array[5])

const colors = ["red", "blue", "green", "yellow", "purple"];
const select1 = document.getElementById("colores");

select1.addEventListener("change", function () {
  const index = this.value;
  document.body.style.backgroundColor = colors[index];
});

const select2 = document.getElementById("c");
const customMapping = [
  "green",  
  "blue",   
  "red",    
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