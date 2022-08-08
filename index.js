













let back= document.querySelector("body");
back.style.backgroundColor = "silver"

const text = document.querySelector("#title");
text.style.color = "green";

let subtitle =document.querySelectorAll("h3").forEach(item =>item.innerHTML=item.textContent.toLocaleUpperCase())

let fruitChild = document.createElement("li");

fruitChild.appendChild(document.createTextNode("Apple"));
let img = document.createElement('img')
img.src = "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=400"
let newFruit = document.getElementById("fruList").appendChild(img);


let greenChild = document.createElement("li");
greenChild.appendChild(document.createTextNode("RedCabbage"));
let image = document.createElement('image')
image.src = "https://images.pexels.com/photos/8859770/pexels-photo-8859770.jpeg?auto=compress&cs=tinysrgb&w=400" 
let newVeg = document.getElementById("vegList").appendChild(image);





