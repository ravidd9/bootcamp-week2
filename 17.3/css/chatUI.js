

const send = function(){
    let text = document.getElementById("input").value
    let newText = document.createElement("div") //create new text
    newText.setAttribute("class", "text")
    newText.innerHTML = text
    let newTime = document.createElement("div") //create new date
    newTime.setAttribute("class", "time")
    let date = new Date()
    newTime.innerHTML = date.getHours() + ":" + date.getMinutes()
    let newTextCon = document.createElement("div") //create new textCon
    newTextCon.setAttribute("class", "textConRight")
    newTextCon.setAttribute("id", "newText")
    newTextCon.appendChild(newText)
    newTextCon.appendChild(newTime)
    document.getElementById("chat").appendChild(newTextCon)
}

let sendBut = document.getElementById("send")
sendBut.onclick = send
