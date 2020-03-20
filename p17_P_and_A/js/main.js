//

/*seleccionamos el elemento html que va a escuchar algo*/
var addKoderButton = document.getElementById("submit-button");
/*le decimos al elemento cual es evento que va a escuchar y qué es lo que hará cuando el evento suceda*/
addKoderButton.addEventListener("click", () => {

    //2.- Con los datos, crear un objeto
    //3.- Agregar ese objeto a mi array
    //alert("hola a todos los koders!!!!")
    //1.- obtener los datos del formulario
    let name = document.getElementById("koder-name").value
    let lastName = document.getElementById("koder-last-name").value
    let deliveredPractices = parseInt(document.getElementById("koder-delivered-practices").value)
    let totalAssistance = parseInt(document.getElementById("koder-assistances").value)
    let koderObject = {
        name,
        lastName,
        deliveredPractices,
        totalAssistance
    }
    console.log(koderObject)
    kodersDb.push(koderObject)
    console.log(kodersDb)
})
var firstInput = document.getElementById("koder-name");
firstInput.addEventListener("focus", () => {
    alert("aquí debe ir el nombre del koder")
})