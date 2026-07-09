// Luxe Finds

document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector(".btn");

button.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Welcome to Luxe Finds! 🚀 Trending AliExpress products are coming soon.");
});

const cards = document.querySelectorAll(".card, .product");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
    card.style.transition = "0.3s";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
});

});

});
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".product").forEach(product=>{

let text = product.innerText.toLowerCase();

product.style.display =
text.includes(value) ? "block" : "none";

});

});
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggle.innerHTML="☀️";
}else{
toggle.innerHTML="🌙";
}

});
document.querySelectorAll(".wishlist").forEach(item=>{

item.addEventListener("click",()=>{

if(item.innerHTML=="❤"){
item.innerHTML="❤️";
}else{
item.innerHTML="❤";
}

});

});