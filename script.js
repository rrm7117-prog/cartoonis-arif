let gallery = document.getElementById("gallery");

let artworks = [
"Caricature Design",
"Portrait Art",
"Wedding Cartoon",
"Gift Illustration",
"Mascot Design",
"Digital Sketch"
];

function loadGallery(){
gallery.innerHTML = "";
artworks.forEach(a=>{
let div = document.createElement("div");
div.className = "card";
div.innerText = a;
gallery.appendChild(div);
});
}

function sendOrder(e){
e.preventDefault();

let name = document.getElementById("name").value;
let type = document.getElementById("type").value;
let msg = document.getElementById("msg").value;

document.getElementById("status").innerText =
"Order Sent Successfully!";

let url = "https://wa.me/8801XXXXXXXXX?text="
+"Name: "+name+"%0A"
+"Type: "+type+"%0A"
+"Message: "+msg;

window.open(url,"_blank");
}

window.onload = loadGallery;
