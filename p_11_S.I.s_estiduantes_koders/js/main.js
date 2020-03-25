//recibir un numero de parte del ususario y calcular el area de un
//circulo cuyo radio sea igual al numero proporcionado
//1.-declarar una variable valueUser
//2. - declarar una variable radio
//3. - asignar el valor que ingresa el usuario por medio del
//metodo prompt() en la variable valueUser
//4. - convertir el valuUser en un valor entero con el metodo parseInt() y asignarlo a la
//variable radio
//5. - declaramos una variable resultArea
//6. - declarar una constante PI con el valor 3.1416
//7. - asignamos el resultado de la operacion PI * radio ^ 2 variable resultArea
//8 - imprimimos la variable resultArea

var valueUser;
var radio;
valueUser = prompt("ingresa un numero");
radio = parseInt(valueUser)
var resultArea;
const PI = 3.1416
resultArea = PI * (radio * radio)
console.log(`el resultado del area del circulo con radio ${radio} es igual a ${resultArea}`)

//este es el de sustituir koder por estudiante

// //3
// cuantas veces se ocupa la palabra estudiante y reemplazarla por koder
var text = ("cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado")
var result = text.match(/estudiante/g).length;
console.log(la palabra estudiante aparecio)
var result_replace = text.replace(/estudiante/g, "koder");
console.log(result_replace)