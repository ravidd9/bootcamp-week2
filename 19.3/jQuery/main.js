$("h1").css("background-color", "blue")
$(".red-div").css("background-color", "red")
$("li:contains('pink')").css("background-color", "pink")
$("li:contains('green')").css("background-color", "green")
$("#brown-div").css("background-color", "brown")


$("#b1").addClass("box")
$("#b2").addClass("box")


$("#input").val("Tera")


const hover = function () {
    $(this).css("background-color", "blue")
}
$("#b1").hover(
    function () {
        $("#b1").css("background-color", "red")
    }, function () {
        $("#b1").css("background-color", "yellow")
    })
$("#b2").on("mouseenter", hover)


const ale = function () {
    alert($("#input").val())
}
// $("button").on("click", ale)


const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
$("body").append(elem)
$('.mine').append('<p class="red">Raspberry</p>')


$(".feedme").on("click", function () {
    let divCopy = $("<div class='feedme'>" + $(this).text() + "</div>")
    $("body").append(divCopy)
})


const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]
for (let name of names) {
    $("body").append(`<div>${name}</div>`)
}


const names1 = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]
for (let name of names1) {
    $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
}


$("#click").on("click", function(){
    $("#blogs").append("<div class='blog'>text</div>")
})
$("#blogs").on("click", ".blog", function(){
    $(this).text("hihihi")
})

