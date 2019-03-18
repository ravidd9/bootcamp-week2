// let users = []
// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }
// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }
// getData()
// displayData()


// const first = function (callback) {
//     setTimeout(function () {
//         console.log("should be first")
//         callback()
//     }, 3000)
// }
// const second = function () {
//     console.log("should be second")
// }
// first(second)


// const doSomething = function(){
//     console.log("something")
//   }
//   setTimeout(doSomething, 3000)


// const square = a => console.log(a*a)
// square(4)


// const add = (x, y) => x + y
// const sum = add(1, 2) 
// console.log(sum) //prints 3



//EXERCISES
//1
// const push = function () {
//   console.log("pushing it!")
// }
// const pull = function () {
//   console.log("pulling it!")
// }
// const pushPull = function(func){
//   func()
// }
// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"


//2
// const getTime = function(func){
//   func(new Date())
// }
// const returnTime = function (time) {
//   console.log('The current time is: ' + time)
// }
// getTime(returnTime)


//3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// }
// const logData = function(data){
//   console.log(data + " too")
// }
// displayData(console.log, logData, "I like to party")


//4
// const sum = (a, b, c) => a+b+c
// sum(1,2,3)


// //5
// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// capitalize("dagfag")


//6
// const determineWeather = temp => {
//   if(temp > 25){
//     return "hot"
//   }
//   return "cold"
// }
// const commentOnWeather = temp => console.log("It's " + determineWeather(temp))
// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"


//7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
// }
// const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
// const makeSound = (sound) => alert(sound)
// explode(shineLight, makeSound, "BOOM")


