async function getMessage(){

const response=await fetch("/api/hello")

const data=await response.json()

document.getElementById(
"output"
).innerHTML=data.message

}