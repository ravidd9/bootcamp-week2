//1 + 2
// let input = $("<input id='input' placeholder='Human Name'></input>")
// $("body").append(input)
// let button = $("<button id='button'>Add Human</button>")
// $("body").append(button)
// $("#button").on("click", function(){
//     $("ul").append(`<li>${input.val()}</li>`)
// })
// $("ul").on("click", "li", function(){
//     $(this).remove()
// })


//3
// $("body").append(`<div class="box" id="b1"></div>`)
// $("body").append(`<div class="box" id="b2"></div>`)
// let firstRed = false
// $("#b1").on("mouseenter", function(){
//     if(firstRed == false){
//         $("#b1").css("background-color", "red")
//         $("#b2").css("background-color", "purple")
//         firstRed= true
//     }
// })
// $("#b2").on("mouseenter", function(){
//     if(firstRed == true){
//         $("#b2").css("background-color", "red")
//         $("#b1").css("background-color", "purple")
//         firstRed = false
//     }
// })


//4
let shoeCounter = 0
let melonCounter = 0
$(".item").on("click", function () {
    if ($(this).attr("data-instock") == "true") {
        let text = $(this).text()
        if($(this).text() == "Shoe" && shoeCounter == 0){
            $("#cart").append(`<div class="cart-item">${text}</div>`)
            shoeCounter++
        }
        if($(this).text() == "Melon" && melonCounter == 0){
            $("#cart").append(`<div class="cart-item">${text}</div>`)
            melonCounter++
        }


    }
})
$("#cart").on("click", "div", function () {
    $(this).remove()
})


//5
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
// ]
// for (let index in fruits) {
//     $("#basket").append(`<div class=${fruits[index].color} id=${fruits[index].name}>${fruits[index].name}</div>`)
// }


//6

