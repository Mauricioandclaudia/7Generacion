$(".square").hide();
$(".square").show();
$("#square-1").show();
$("#animate-button").on("click", () => {
    $(".square").slideToggle("slow")
})
$(".square").on("click", () => {
    $(".square").toggleClass("bg-dark")
})
var someArray = [1, 2, 3, 4, 5, 6]
var someOtherArray = [{
        name: "some name",
        phone: "some Phone"
    },
    {
        name: "some name 2",
        phone: "some Phone"
    },
    {
        name: "some name 3",
        phone: "some Phone"
    },
    {
        name: "some name 4",
        phone: "some Phone"
    }
]
$("#add-content").on("click", () => {
    someOtherArray.forEach((item) => {
        $("#content-wrapper").append(`
        <div class='square'>Nombre: ${item.name}</div>
        <div class='square bg-dark'>Nombre: ${item.phone}</div>
        `)
    })
})
$("#toggle-flex").on("click", () => {
        $("#content-wrapper").toggleClass("d-flex")
    })
    /*ejemplo de petición GET con jquery:*/
$.ajax({
    url: "test.html",
    method: "GET"
}).done(function(response) {
    console.log(response)
});


/* 
.square {
    width: 100 px;
    height: 100 px;
    background: peru;
    display: block;
    transition: all 1 s ease;
}
.bg - peru {
    background: peru;
}

*/