// Store the wallet amount to your local storage with key "amount"


let arr = JSON.parse(localStorage.getItem("amount")) ||[]
console.log(arr)
  
function paisa(){


let input = document.querySelector("#amount").value;
arr.push(input)

let sum =0
for(var i=0 ; i<arr.length; i++){
    sum += Number(arr[i])
}


let balance = document.querySelector("#wallet")

balance.textContent = sum


localStorage.setItem("amount",JSON.stringify(sum))


}