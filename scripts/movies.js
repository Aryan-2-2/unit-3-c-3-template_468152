// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let Forappend = (id)=>{
    return document.getElementById(id)
}

let ForCreate = (para)=>{
return document.createElement(para)
}

let id;

async function show(){

try{
    const input = document.querySelector("#search").value;

    const url = `https://www.omdbapi.com/?apikey=82983a7b&q&s=${input}`
    
    
    let  res = await fetch(url)
    let data = await res.json()
    
    
    let exactData = data.Search;
    console.log('exactData:', exactData)
    
    return exactData

}

catch(err){
    console.log('err:',err)

}

}

let append = (videos)=>{

Forappend("movies").textContent = null;

videos.map(function({Poster,Title}){

let image = document.createElement("img")
let title = document.createElement("p")
let box = document.createElement("div")
let btn = document.createElement("button")

btn.setAttribute("class","book_now")
box.setAttribute("id","box")
image.setAttribute("id","img")
title.setAttribute("id","title")

image.src = Poster;
title.textContent = Title
btn.textContent ="book_now"

let data_two = {
    Poster,
    Title,
}


btn.onclick = ()=>{
parsal(data_two)
}


box.append(image,title,btn)

document.querySelector("#movies").append(box)
})

}

function parsal(x){

window.location.href="checkout.html"
localStorage.setItem("movie",JSON.stringify(x))

}






async function main(){

let data = await show();
if(data === undefined){
    return false;
}
append(data)
}

let debouncing = (func,delay)=>{

    if(id){
        clearTimeout(id)
    }
  id =  setTimeout(() => {
        func()

    }, delay);
    
}


let total = JSON.parse(localStorage.getItem("amount"))

let h1 = document.querySelector("#wallet")
h1.textContent = total;