//
var complete_name

var complete_name = prompt("Ingresa tu nombre Completo")
complete_name = complete_name.replace(/ /g, "")
console.log(`Tu nombre contiene un numero de caracteres =  ${complete_name.length}`);



if (complete_name.length < 15) {
    console.log("Tu nombre es muy corto");
} else {
    console.log("Tu nombre es muy largo");
}



number_vocals = complete_name.match(/[aeiou]/gi).length

console.log(number_vocals)




//Algoritmo1

//Declarar variable complete_name
//asignar valor a complete_name mediante un prompt que de el mensaje "Ingresa tu nombre completo"
//imprimir en la consola "Tu nombre contiene un numero de caracteres =  " y el numero de caracteres de complete_name utilizando el metodo complete_name.length
//



//Práctica 2

//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si tu nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo

//practica 10
//Algoritmo2
//De la asignacion de la practica uno a complete_name verificar mediante un operador condicional si complete_name.length es menor a 15
//Si es verdadera la condicion imprimir en consola "Tu nombre es muy corto"
//En caso contrario imprimir en la consola "Tu nombre es muy largo"



//Práctica 3

//obtener el nombre completo del usuario
//contar cuántas vocales tiene

//Algoritmo3
//crear una variable llamada number_vocals y asignar mediante el metodo .match entre parentesis indicando una barra diagonal y abriendo un corchete los caracteres a buscar que en este caso son las vocales aeiou, cerrando corchete y colocando nuevamente barra diagonal
//delante de la barra diagonal de cierre indicamos la letra g para que busque  todas las coincidencias
//delante de la g indicar la letra i para que no distinga entre mayusculas y minusculas
//despues del parentesis de cierre agregar el metodo .length para indicar el numero de caracteres
//imprimir la variable number_vocals