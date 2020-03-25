/*---------ALGORITMO---------*/
//1.-DECLARAR VARIBLES a,b,c
//2.-DECLARAR FUNCION prompt
//    2.1.-DECLARAR COMO PRIMER ARGUMENTO UNA CADENA DE CARACTERES SOLICITANDO AL USUARIO EL VALOR DEL 1er LADO
//    2.2.-DECLARAR COMO SEGUNDO ARGUMENTO UN CARACTER STRING ("a") INDICANDO EL VALOR EN RELACION AL prompt  
//3.-ASIGNAR LA FUNCION prompt DECLARADA EN EL PUNTO 2 A LA VARIABLE a
//4.-REPETIR EL PASO 2 PERO ESTA VEZ SE SOLICITARA EL VALOR DEL 2do LADO EN EL PRIMER ARGUMENTO Y EN EL SEGUNDO DECLARARA EL CARACTER "b"
//5.-REPETIR PASO 3, ASIGNANDO VALOR DEL PASO 4 A LA VARIABLE b
//6.-REPETIR EL PASO 2 PERO ESTA VEZ SE SOLICITARA EL VALOR DEL 3er LADO EN EL PRIMER ARGUMENTO Y EN EL SEGUNDO DECLARARA EL CARACTER "c"
//7.-REPETIR PASO 3, ASIGNANDO VALOR DEL PASO 6 A LA VARIABLE c
//8.-DECLARAR SUMA DE LAS VARIABLES a,b y c, LA SUMA DE ESAS TRES VARIABLES DEBERA SER DIVIDIDA ENTRE 2 (/2)
//9.- DECLARAR LA VARIABLE sp Y ASIGNARLE LA FORMULA DECLARADA EN EL PASO 8
//10.-DECLARAR LA VARIABLE semiper Y ASIGNARLE EL VALOR DE LA FUNCION parseInt(sp) 
//11.- DECLARAR LAS VARIABLES catopa (USADO PARA CATETO OPUESTO--->RECOMENDABLE PARA EL LADO a),catadyb (USADO PARA CATETO ADYACENTE--->RECOMENDABLE PARA EL LADO b),hipotenusac (USADO PARA LA HIPOTENUSA--->RECOMENDABLE PARA EL LADO c)
//12.- DECLARAR LA VARIABLE altura
//13.- DECLARAR LA VARIABLE area
//14.- DECLARAR CONDICIONAL (if)
//  14.1.-DECLARAR 1ra CONDICION DE FUNCION if, USAR UN OPERADOR COMPARATIVO ESTRICTO ENTRE LAS VARIABLES a Y b (PARA COMPARAR EL VALOR INGRESADO POR EL USUARIO ENTRE AMBAS VAROABLES)
//  14.1.1.- DECLARAR UN OPERADOR LOGICO OR (||)
//  14.2.-DECLARAR 2ra CONDICION DE FUNCION if, USAR UN OPERADOR COMPARATIVO ESTRICTO ENTRE LAS VARIABLES a Y c (PARA COMPARAR EL VALOR INGRESADO POR EL USUARIO ENTRE AMBAS VAROABLES)
//  14.2.1.- DECLARAR UN OPERADOR LOGICO OR (||)
//  14.3.-DECLARAR 3ra CONDICION DE FUNCION if, USAR UN OPERADOR COMPARATIVO ESTRICTO ENTRE LAS VARIABLES c Y b (PARA COMPARAR EL VALOR INGRESADO POR EL USUARIO ENTRE AMBAS VAROABLES)
//  14.3.1.- DECLARAR APERTURA DE LA CONDICIONAL CON UN CORCHETE ({.......}) 
//15.-INGRESASAR DENTRO DE LOS CORCHETES UN OBJETO console
//    14.1.-USAR EL METODO log Y DECLARAR COMO PARAMETRO UNA CADENA STRING INDICANDO QUE EL TRIANGULO QUE CUMPLE ESA PRIMERA CONDICION ES UN TRIANGULO ISOCELES

/*------------------------------*/

debugger

var a = prompt("Ingresa el valor del 1er lado", "a");
var b = prompt("Ingresa el valor del 2do lado", "b");
var c = prompt("Ingresa el valor del 3er lado", "c");

var sp = (a + b + c) / 2;

var semiper = parseInt(sp);

var catopa = parseInt(a);
var catadyb = parseInt(b);
var hipotenusac = parseInt(c);

var altura;

var area;

if ((a === b) || (a === c) || (c === b)) {

    console.log("Tu triangulo es un triangulo Isoceles");
    altura = Math.sqrt((catopa * catopa) - ((catadyb * catadyb) / 4));
    area = (catadyb * altura) / 2
    console.log("El area de tu triangulo es: ", area);

} else if ((a === b === c)) {

    console.log("Tu triangulo es un triangulo Equilatero");
    altura = (catopa * ((Math.sqrt(3)) / 2));
    area = (catopa * altura) / 2;
    console.log("El area de tu triangulo es: ", area);

} else if ((a != b) && (a != c) && (c != b)) {


    var A = prompt("Ingresa el valor del 1er Angulo", "A");
    var B = prompt("Ingresa el valor del 2do Angulo", "B");
    var C = prompt("Ingresa el valor del 3er Angulo", "C");

    var firstangle = parseInt(A);
    var secondangle = parseInt(B);
    var thirdangle = parseInt(C);

    if ((firstangle || secondangle || thirdangle) > 0 && (firstangle || secondangle || thirdangle) <= 90) {

        console.log("Tu triangulo es un triangulo Rectangulo");
        altura = (catopa * catadyb) / 2;
        area = ((catadyb) * (altura)) / 2;
        console.log("El area de tu triangulo es: ", area);

    } else {

        console.log("Tu triangulo es un triangulo Escaleno");
        area = Math.sqrt(semiper * (semiper - catopa) * (semiper - catadyb) * (semiper - hipotenusac));
        console.log("El area de tu triangulo es: ", area);
    }

} else {

    console.log("Tu triangulo no esta clasificado");

}