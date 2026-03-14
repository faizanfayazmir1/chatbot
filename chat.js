async function sendMessage(){

const msg=document.getElementById("message").value
const chat=document.getElementById("chatWindow")

let color="white"

/* case 1 deadline */

const deadlineMatch=msg.match(/(\d+)\s*(hour|hr|hours)/i)

if(deadlineMatch){

const hrs=parseInt(deadlineMatch[1])

if(hrs>=24) color="blue"
else if(hrs>=12) color="yellow"
else if(hrs<2) color="orange"

}

/* case 2 number */

else if(/^\d+$/.test(msg)){

let val=parseInt(msg)%100
let light=100-val

color=`hsl(0,0%,${light}%)`

}

/* user message */

const user=document.createElement("div")

user.className="message user"
user.innerText=msg

chat.appendChild(user)

/* call backend */

const res=await fetch("/api/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({message:msg})

})

const data=await res.json()

const bot=document.createElement("div")

bot.className="message bot"

bot.style.background=color

bot.innerText=
data.hinglish+
"\n\nEnglish:\n"+
data.english

chat.appendChild(bot)

document.getElementById("message").value=""

}
