var kodersArray = [];
const getKoderData = () => {
    let name = $("#koder-name").val();
    let email = $("#koder-email").val();
    let phone = $("#koder-phone").val();
    let koderObject = { name, email, phone }
    savekoder(koderObject)

    printKoders();
}
$("#save-koder").on("click", getKoderData)
const assignDeleteKoderListener = () => {
    $(".delete-koder").on("click", deleteKoderInDb)
}
const printKoders = () => {
    $("#koders-table").find("tbody").empty();
    kodersArray.forEach((koder, index) => {
        $("#koders-table").find("tbody").append(`
            <tr>
                <td>${index + 1}</td>
                <td>${koder.name}</td>
                <td>${koder.email}</td>
                <td>${koder.phone}</td>
                <td><div class="btn btn-danger delete-koder" data-koder-index=${koder.key}>X</div></td>
            </tr>
        `)
    })
    assignDeleteKoderListener();
}


const deleteKoder = (event) => {
    let koderIndex = $(event.target).data("koder-index")
    kodersArray.splice(koderIndex, 1)
    printKoders();
}

const getKodersFromDb = () => {
    kodersArray = [];
    $.ajax({
        url: "https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koders/.json",
        method: "GET",
        success: (response) => {
            $.each(response, (key, value) => {
                kodersArray.push({...value, key })
                console.log(kodersArray)
            })
            printKoders();
        }
    })
}


const deleteKoderInDb = () => {
    let koderKey = $(event.target).data("koder-index")
    $.ajax({
        url: `https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koders/${koderKey}.json`,
        method: "DELETE",
        success: (response) => {
            console.log(response);
            getKodersFromDb();
        }
    })
}
getKodersFromDb();




const savekoder = (koderObject) => {

    $.ajax({
        url: `https://javascript-ajax-d0ce6.firebaseio.com/mauricio/koders/.json`,
        method: "POST",
        data: JSON.stringify(koderObject),
        success: (response) => {
            console.log(response);
            getKodersFromDb();
        }
    })
}

getKodersFromDb();