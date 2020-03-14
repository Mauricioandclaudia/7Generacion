//


/*
var koderObject = {
    name: "el nommbre que no es ivan",
    lasname: "no pedraza",
    showfullname: function() {
        return this.name + " " + this.lastname
    }
}




var someAnimal = {
    name: "ornitorrinco",
    lefeExpectancy: 30,
    age: 15,
    remainingLifetime: function() {
        return this.lifeExpectancy - this, age
    }
}



var someObject = {
    someStuff.
    "",
    someAtt: () => {
        this.someStuff
    }
}

*/


var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]



var Person_Data = {
    name: "",
    lastname: "",
    phone: "",
    birthdate: "",
}







//getShortenedData => DCM - ddmmaa
//output "DCM-141195"
//Contraer



//en una estructara constrctora empeiza con mayuscula

function Koder(name, lastName, birthDate, phone) {
    this.name = name,
        this.lastName = lastName,
        this.birthDate = birthDate,
        this.phone = phone
}

var Koder1 = new Koder("");










/*


//-------------------------------------------------------------------------

var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]

var koderArray = [
    "Israel",
    "Salinas Martínez",
    "5543788096",
    "27-09-1989"

]


function Koder((name, lastName, birthDate, phone) {

        this.name = name,
            this.lastName = lastName,
            this.birthDate = birthDate,
            this.phone = phone


    }

    var KoderCollection = []

    kodersMatrix.forEach((dataArray) => {
        let koderObject = new Koder[...dataArray];
        KoderCollection.push[koderObject];
    }]

    console.log(KoderCollection)






    utilizar prompt para hacer el ejercicio

    constructora






    var bear = {
        marca: "tecate"
        tipo: "obscura"
        tamaño: "grande"
    }

    var bear2 = {
        marca: "modelo"
        tipo: "calra"
        tamaño: "chica"
    }








    en un Array escribes asi:

*/




//----------------------------nuevo !!!!!!!!!! parendido !----------------------------------------------

/*
function Papita(marca, type, size) {
    this.marca = marca,
        this.type = type,
        this.size = size
    this.promocion = function() {
        alert("esta es la mejor cerveza del mundo !!!");
    }
    var botana = [];
    const quiereUnaPapa = () => {
        let botanaInfo = [];
        let nuevaPapa = parseInt(prompt("Cuantas botanas desea?"))
        for (var i = 0; i < nuevaPapa; i++) {
            let marca = prompt("Ingrese la marca de la botana ")
            let type = prompt("Ingrese que tipo de botana ")
            let size = prompt("Ingrese el tamaño")
            botanaInfo.push(marca, type, size)
            let papash = new Papita(...botanaInfo)
            botana.push(papash)
            botana[1].promocion()
        }
        console.log(botana)
    }

*/



//----------------------------nuevo !!!!!!!!!! parendido !----------------------------------------------































/* */



/**
 *     const printBearBrand = (bearBox) => { // 

        bearBox.forEach((bear) => ) { // 
            console.log(bear.marca) //
        }

    }

    printBearBrand(bearCollection)





    cuando quiero preguntar que caja es la quedebo de traer o sacar del array es con el parametro osea(no importa el nombre) =>



        con el forEach es para buscar el producto


    //funcion contructora 

    fincion constructora es para creear una nueva //Cerveza es un molde para haacer varias cosas y no irnos uno por uno va

    var bearCollection = [{
            marca: "tecate"
            tipo: "obscura"
            tamaño: "grande"
        }

        var brar2 = {
            marca: "modelo"
            tipo: "calra"
            tamaño: "chica"
        }
    ]



    var cervezaDeMau = {
        nombre: "bohémia"
        tamaño: "1 litro"
        tipo: "obscura"
    }


    function Cerveza(nombne, tipo, tamaño) {
        this.nombre = nombre,
            this.tipo = tipo,
            this.tamaño = tamaño
        this.promocion = function() {
            alert("esta es la mejor cerveza del mundo !!!");
        }
    }







    var resetas_Papas = [
            [
                "Moyo",
                "Mediana",
                "Salado"
            ],
            var resetas_Papas2 = [
                    "Zepol"
                    "GRande"
                    "Dulce"
                ],
                var resetas_Papas3 = [
                    "Zepol"
                    "GRande"
                    "Dulce"

                ]




            function resetas() {
                this.nombre = nombre,
                    this.tamaño = tamaño,
                    this.tipo = tipo
                this.promocion = function() {
                    alert("en la Compra de unas papas Moyo llevate un Refresco");
                }
            }

             */


//crear una función que pida al usuario las propiedades nombre {name}, apellido{lastName}, edad{age} y teléfono{phone} de un koder y crear un objeto {koderObject} con esos datos










//crear una función que pida al usuario las propiedades nombre {name}, apellido{lastName}, 
//edad{age} y teléfono{phone} de un koder y crear un objeto {koderObject} con esos datos
var koder = {
    name: undefined,
    lastName: undefined,
    age: undefined,
    phone: undefined
}
const objectProps = (obj) => {
    for (prop in obj) {
        let propiedad = prompt(`escribe la propiedad ${prop} de koder`)
        obj[prop] = propiedad;
    }
    console.log(obj)
}
objectProps(koder);
}