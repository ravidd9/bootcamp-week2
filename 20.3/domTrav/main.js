
// $("button").on("click", function(){
//     console.log($(this).closest("div").find("span").text())
// })



// $("button").on("click", function(){
//     console.log($(".container").find("p").text())
// })


//1
$(".generator").on("click", function(){
    let cpuID = []
    console.log($(this).closest(".processor").attr("id"))
    let cpu = $(this).closest(".computer").data("id")
    console.log(cpu)
    cpuID.push(
        {"cmp_ id": cpu}
    )
    console.log($(this).closest(".computer").find(".BUS").text())
    console.log(cpuID)
})
$(".validator").on("click", function(){
    console.log($(this).closest(".computer").find(".generator").text())
    console.log($(this).closest(".computer").find(".MB").text())
    console.log($(this).closest(".computer").find(".QR").first().text())
    console.log($(this).closest(".computer").find(".QR:nth-child(2)").text())
})