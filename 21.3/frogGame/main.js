

let lvl = 1
let frogNum = 0
const createFrog = function () {
    frogNum++
    $("#frogs").append($(`<i class="fas fa-frog" id="frog${frogNum}"></i>`))
    let id = "frog" + frogNum;
    randomColor($(`#${id}`))
    randomSize($(`#${id}`))
    randomLoc($(`#${id}`))
    $("#frogsLeft").text(frogNum + " Frogs Left")
}
const randomColor = function (frog) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = "rgb(" + x + "," + y + "," + z + ")";
    $(frog).css("color", color)
}
const randomSize = function (frog) {
    let size = Math.floor(Math.random() * (100 - 30) + 30);
    $(frog).css("font-size", size + "px")
}
const randomLoc = function (frog) {
    let x = Math.floor(Math.random() * 85);
    let y = Math.floor(Math.random() * (70 - 10) + 10);
    $(frog).css("left", x + "%")
    $(frog).css("top", y + "%")
    $(frog).css("position", 'absolute')
}
const nextLevel = function () {
    lvl++
    for (let i = 0; i < lvl; i++) {
        createFrog()
    }
    $("#lvl").text("Level " + lvl)
}
const resetLevel = function () {
    lvl = 1
    frogNum = 0
    $("i").remove()
    $("#start").css("display", "block")
}


const startGame = $("#start").on("click", function () {
    $(this).css("display", "none")
    createFrog()
    $("body").on("click", "i", function () {
        $(this).remove()
        frogNum--
        $("#frogsLeft").text(frogNum + " Frogs Left")
        if (frogNum == 0) {
            nextLevel()
            seconds_left = start + 1
            start++
        }
    })
    let start = 5
    let seconds_left = 5
    let interval = setInterval(function () {
        document.getElementById('timer').innerHTML = --seconds_left + " Second Left";

        if (seconds_left <= 0) {
            alert("GAME OVER!")
            clearInterval(interval)
            resetLevel()
        }
    }, 1000);
})