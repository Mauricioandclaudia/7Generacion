//




//Práctica:
//Crear una función ó funciones que permitan al usuario elegir 
//una operación básica, indicar 2 valores, y ejecutar la operación 
//seleccionada. Imprimir el resultado
//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"



//Práctica:
//Crear una función ó funciones que permitan al usuario elegir 
//una operación básica, indicar 2 valores, y ejecutar la operación 
//seleccionada. Imprimir el resultado

//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"

/*

const operationsSelector = (operationType, number1, number2) => {
    let result;
    if (operationType === "suma") {
        result = number1 + number2
    } else if (operationType === "resta") {
        result = number1 - number2
    } else if (operationType === "multiplicacion") {
        result = number1 * number2
    } else if (operationType === "division") {
        result = number1 / number2
    } else {
        alert("Esa operación no la venimos manejando")
    }

    console.log(`La ${operationType} de los dos números que indicaste es ${result}`)
}

*/


práctica:

    //función que me permita ingresar el nombre de un array, y contar cuántos items tiene,
    // si el array no existe, debe enviar un prompt que diga "tu array no existe"
    //función que reciba un array, e imprima los elementos de ese array en orden alfábetico y 
    // con la primer palabra en uppercase
    //función que reciba un array, un número, y 
    // debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado
    //función que reciba una cantidad (número), 
    // este número será la cantidad de veces que se solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales



    /*
    const name = (items, bmentorsNames, amentorsNames) = {

        
    }

    */


    esta bien y funciona pero no es como lo pidio
var name0

var name = prompt("Ingresa el nombre");

name = name.replace(/ /g, "");

console.log(`el items es: =  ${name.length}`);

for (i = 0; i <= name; i++) {
    console.log(i);
}

const name_1 = (items, bmentorsNames, amentorsNames) => {

        console.log(items);

    }
    //items = prompt("tu array no existe chaval !!!");



//-----------------------------------------------------------------------------------------------//





//-----------------------------------------------------------------------------------------//





var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]





//función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, debe enviar un prompt que diga "tu array no existe"

const Array_name = (array_all) => { //creamos una constate con el nombre Array_name con la asignacion array_all con una funcion flecha

        if (Array.isArray(array_all)) { //con if vamos a ver si se cumple  array_all con la funcion isArray que devuelve un array y si es verdadero o falso 
            console.log("la variable si es un array") //aqui imprimimos si cumple la funcion 
            alert(`Tu variable es un array y contiene ${array_all.length} items`) //tiene que mandar una alerta si es un array  y te lo arroja la cantidad de caracteres que  tiene caaa item mediante la propiedad lenht. 
        } else { //si no se cumple la condicion anterios  if  pasas a else mediante un alerta ("").
            alert("la variable no es un array chaval")
        }
    }
    //función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con la primer palabra en uppercase

const letters = (matrix) => { //crear una constane con el nombre letters que le asignamos matrix con la funcion flecha
    let order = matrix.sort() //creamos una variable order y le asignamos matrix.sort y con el metodo sort los va a regresar ordenamos ya sea por numero o alfabeticamente
    return order // me los regresa ordenados 
}


const capital_latter = (arrayToTransform) => { // //crear una constane con el nombre capital_latter que le asignamos arrayToTransform  con la funcion flecha
    let upperCased_Array = []; // creamos una varible upperCased que lo vamos a asignar  en un array vacio = [] 
    arrayToTransform.forEach((item) => { // ponemos el parametro arrayToTransform.forEach  
        // que sirve para ejecutar o ir por cada elemento de  esta dentro del array que en este caso seria el item 
        let firstWord = item.split(" ")[0]; //esta variable le damos el nombre de firstWord con la signacion item.plit que es un metodo de division de lo que hace es separar letra por letra atraves de una coma
        // y empozando con la posicion [0] 
        let secondWord = item.split(" ")[1]; //esta variable le damos el nombre de seconWord con la signacion item.plit que es un metodo de division de lo que hace es separar letra por letra atraves de una coma
        // y empozando con la posicion [1] 
        let uppercased = firstWord.toUpperCase(); // creamos una variable uppercased y le asignamos  fistWord.toUpperCase con el metodo  toUpperCase para que me lo imprima con la primera leta en mayuscola
        upperCased_Array.push(`${uppercased} ${secondWord}`) //ponemos un parametro con el metodo push que inserta un elemento a un array que en este caso seria uppercase y secondWord y esta concatenado
    })
    return upperCased_Array
}


const transformArray = (arrayToTransform) => { //crear una constane con el nombre transformArray con la seignacion arrayToTransform con la funcion flecha
    let sorted_Array = letters(arrayToTransform) //creamos una variable con la signacion latter que es mi constante que esta arriba  (arrayToTranform)
    let upperCased_Array = capital_latter(sorted_Array) //creamos una variable con la signacion 
    console.log(upperCased_Array)
}


//función que reciba un array, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado
const print_characters = (array_To_Print, charLimit) => {
    array_To_Print.forEach((item) => {
        let shortenedString = item.substring(0, charLimit)
        console.log(shortenedString)
    })
}


//función que reciba una cantidad (número), este número será la cantidad de veces que se solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales
const get_Number_of_koders = () => {
    let number_Of_Koders = parseInt(prompt("cuántos koders deseas registrar?"))
    return number_Of_Koders
}


const get_Koders_Names = () => {
    let i;
    let koders_Array = [];
    let koders_To_Register = get_Number_of_koders();
    console.log(koders_To_Register)
    if (isNaN(koders_To_Register)) {
        alert("por favor ingresa un número");
        get_Koders_Names();
    } else {
        for (i = 0; i < koders_To_Register; i++) {
            let koder_Name = prompt("Ingresa el nombre del koder");
            console.log(koder_Name)
            koders_Array.push(koder_Name)
        }
    }
    console.log(koders_Array)

}


//            cuales es mejor practica
//          var
//            let
//      consti

//    que es ua funcion constructora. - tarea para mañana 11 - 03 - 20





//una constante siempre se va a iniciar con una Mayuscula 


//funcion constante  es lo qye a hacer