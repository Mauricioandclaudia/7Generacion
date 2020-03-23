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

const Array_name = (array_all) => {
    
        if (Array.isArray(array_all)) {
            console.log("la variable si es un array")
            alert(`Tu variable es un array y contiene ${array_all.length} items`)
        } else {
            alert("la variable no es un array chaval")
        }
    }
    //función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con la primer palabra en uppercase
const letters = (matrix) => {
    let order = matrix.sort()
    return order
}
const capital_latter = (arrayToTransform) => {
    let upperCased_Array = [];
    arrayToTransform.forEach((item) => {
        let firstWord = item.split(" ")[0];
        let secondWord = item.split(" ")[1]
        let uppercased = firstWord.toUpperCase();
        upperCased_Array.push(`${uppercased} ${secondWord}`)
    })
    return upperCased_Array
}
const transformArray = (arrayToTransform) => {
        let sorted_Array = letters(arrayToTransform)
        let upperCased_Array = capital_latter(sorted_Array)
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




        //            cuales es mejor practica
        //          var
        //            let
        //      consti

        //    que es ua funcion constructora. - tarea para mañana 11 - 03 - 20





