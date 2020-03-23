//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

//debugger

var couns_koders //Declarando un variable


var koders = [] // declarando un array


couns_koders = prompt("Ingresa la cantidad de koders que quieras"); // solicitar y aignar la cantidad de koders

couns_koders = parseInt(couns_koders); //combertir de string a number  

//var i // declara variable para la estructuta for (este va dentro de tu for para que no ocupe un espacio en la memoria)

for (var i = 0; i < couns_koders; i++) { // definir la cantidad de iteraciones hasta la cantidad de koders ingresador por el usuario

    var koder;
    koder = prompt(`coloca el Nombre del koder ${i+1}`)
    koders.push(koder) //
}

//console.log(koders)


koders.forEach((koder) => {
    var firstname

    firstname = koder.split(" ", 1)

    console.log(firstname[0])
});