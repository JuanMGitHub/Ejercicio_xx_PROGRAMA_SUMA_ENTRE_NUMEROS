/*import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;*/
//PROGRAMA SUMA ENTRE NUMEROS
let numMenor, numMayor, numero1, numero2: number;
numero1 = Number(prompt("ingrese el primer número del rango a sumar: "));
numero2 = Number(prompt("ingrese el segundo número del rango a sumar: "));
if (numero1 <= numero2) {
  numMenor = numero1;
  numMayor = numero2;
} else {
  numMenor = numero2;
  numMayor = numero1;
}
console.log("el numero menor elegido fue: " + numMenor);
console.log("el numero mayor elegido fue: " + numMayor);
for (
  let indice: number = 1, numSuma: number = numMenor;
  numMenor < numMayor;
  indice++
) {
  numMenor = numMenor + 1;
  console.log("el numero del rango a sumar: " + numMenor);
  numSuma = numSuma + numMenor;
  console.log("la suma parcial del rango es: " + numSuma);
}
