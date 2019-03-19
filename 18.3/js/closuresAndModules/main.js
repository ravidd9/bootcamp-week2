// const Family = function(){
//   let members = []
//   const birth = function(name){
//     members.push(name)
//     console.log(members)
//   }
//   return birth
// }
// const giveBirth = Family()
// giveBirth("Bob")
// giveBirth("yossi")


// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }
//     const sub = function (x, y) {
//         return x - y;
//     }
//     const mul = function (x, y) {
//         return x * y;
//     }
//     const div = function (x, y) {
//         return x / y;
//     }
//     return{add, sub, mul, div
//     }
// }
// const m = mathOperations()
// m.add(13,23)
// m.mul(1,6)
// m.mul(7, m.div(36, 6))


// const UsersModule = function() {
//   const _users = ['Aaron', 'Avi'];
//   const addUser = function(user) {
//     _users.push(user)
//   }
//   const listUsers = function() {
//     for (user of _users) {
//       console.log(user)
//     }
//   }
//   return {
//     addUser: addUser,
//     listUsers: listUsers
//   }
// }
// const usersModule = UsersModule()
// usersModule.addUser('Narkis')
// usersModule.addUser('ada')
// usersModule.addUser('lkkllli')
// usersModule.listUsers()
// console.log(usersModule._users) //undefined


//1
// const StringFormatter = function(){
//   const capitalizeFirst = function(str){
//     return str[0].toUpperCase() + str.slice(1).toLowerCase()
//   } 
//   const skewerCase = function(str){
//       return str.replace(" ", "-")
//   }
//   return{
//     capitalizeFirst,
//     skewerCase
//   }
// }
// const formatter = StringFormatter()
// console.log(formatter.capitalizeFirst("dafaga"))
// console.log(formatter.skewerCase("blue box"))


//2
// const Bank = function(){
//   let money = 500
//   const deposit = cash => money+=cash
//   const check = () => console.log(money)
//   return {deposit, check}
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.check()


//3
// const SongsManager = function(){
//   const songs = {
//     "sax": "3JZ4pnNtyxQ",
//   }
//   const addSong = function(name, url){
//     songs[name] = url.split("=")[1]
//   }
//   const getSong = function(name){
//     console.log("the link for the song named " + name + " is https://www.youtube.com/watch?v=" + songs[name])
//   }
//   return {
//     addSong,
//     getSong
//   }
// }
// const songsManager = SongsManager()
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
// songsManager.getSong("how long")


