function login(){

const email=document.getElementById("email").value

if(!email.endsWith("@petasight.com")){

document.getElementById("error").innerText=
"Only @petasight.com emails allowed"

return

}

localStorage.setItem("userEmail",email)

window.location="chat.html"

}
