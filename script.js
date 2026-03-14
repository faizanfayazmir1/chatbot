document.getElementById("sendBtn").onclick = async () => {

const email = document.getElementById("email").value
const message = document.getElementById("message").value
const chat = document.getElementById("chat")

if(!email.endsWith("@petasight.com")){
alert("Access denied. Only @petasight.com users allowed.")
return
}

let color="white"

if(!isNaN(message)){
let val=Math.abs(parseInt(message))%100
let light=100-val
color=`hsl(0,0%,${light}%)`
}

else if(message.match(/(\d+)\s*(hour|hr)/i)){
let hrs=parseInt(message.match(/\d+/)[0])

if(hrs>=24) color="blue"
else if(hrs>=12) color="yellow"
else color="orange"
}

const userMsg=document.createElement("div")
userMsg.className="message user"
userMsg.innerText=message
chat.appendChild(userMsg)

const res = await fetch("/api/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({message})

})

const data = await res.json()

const botMsg=document.createElement("div")
botMsg.className="message bot"

botMsg.innerText =
data.hindi + "\n\nEnglish:\n" + data.english

if(data.tone=="very_sad") color="darkred"
else if(data.tone=="sad") color="lightcoral"
else if(data.tone=="neutral") color="burlywood"
else if(data.tone=="happy") color="green"
else if(data.tone=="very_happy") color="darkgreen"

botMsg.style.background=color

chat.appendChild(botMsg)

}
