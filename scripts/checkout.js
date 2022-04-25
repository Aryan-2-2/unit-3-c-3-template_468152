// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time




var total = JSON.parse(localStorage.getItem("amount")) || []

var h1 = document.querySelector("#wallet")
h1.textContent = total;


function check(){
    var amount  = document.querySelector("#number_of_seats").value;

   var a = Number(amount)
   var b = Number(h1.textContent)
 
if(a*100>b){
    alert("Insufficient Balance!")
}
else{
    alert("Booking successful!")
}

 
let main  = h1.textContent  = total -a*100


localStorage.setItem("amount",JSON.stringify(main))

}




let data = JSON.parse(localStorage.getItem("movie"))
console.log(data)

let box =  document.createElement("div")
let image = document.createElement("img")
let title = document.createElement("p")

image.src = data.Poster;
title.textContent = data.Title;

box.setAttribute("id","box")

box.append(image,title)

document.querySelector("#movie").append(box)
    

