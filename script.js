console.log("javascript is working");
const sofaImage = document.getElementById('sofa-image');
sofaImage.onclick = function() {
    console.log("CLICK WORKS");
}
console.log(sofaImage);
const nextSofaImage = document.getElementById('next-sofa-image');
const productName = document.getElementById('product-name');
const productDescription = document.getElementById('product-description');
let currentsofa = 0;
const sofaImages = [
    "pictures/sofa.jpg",
    "pictures/sit.jpg",
    "pictures/sitting.jpg",
    "pictures/cozy.jpg"
];
const productNames = [
    "Elegant Sofa",
    "Cozy Sofa",
    "Modern Sofa",
    "Cozy"
];
const productDescriptions = [
    "Comfortable and stylish, perfect for any living room",
    "Soft and inviting, ideal for relaxing and unwinding.",
    "Contemporary design with comfort and style in mind.",
    "timeless design, and the perfect balance of comfort and style for a living space."
]
sofaImage.addEventListener("click", function() {
    console.log("sofa clicked");
    sofaImage.classList.add("flip");
    nextSofaImage.src = sofaImages[currentsofa + 1];
    setTimeout(function(){
     if (currentsofa === 3) {
        currentsofa = 0;
    } else {
        currentsofa++;
    }
    sofaImage.src = sofaImages[currentsofa];
    productName.textContent = productNames[currentsofa];
    productDescription.textContent = productDescriptions[currentsofa];
    sofaImage.classList.remove("flip");
    }, 500);
});
const bedImage = document.getElementById('bed-image');
const nextbedImage = document.getElementById('next-bed-image');
const bedName = document.getElementById('bed-product-name');
const bedDescription = document.getElementById('bed-product-description');
let currentbed = 0;
const bedImages = [
    "pictures/room.jpg",
    "pictures/bed (2).jpg",
    "pictures/bedroom.jpg"
]
const bedNames = [
    "Serenity Frame Bed",
    "Royal Grace Bed",
    "The Haven Bed"
]
const bedDescriptions = [
    "Clean, stylish and calming, designed to create a warm and relaxing bedroom",
    "A sophisticated statement piece combining timeless elegance with lasting comfort",
    "Cozy, elegant design made for peaceful nights and resful mornings"
]
bedImage.addEventListener("click", function() {
    bedImage.classList.add("flip");
    nextbedImage.src = bedImages[currentbed + 1];
    setTimeout(function(){
     if (currentbed === 2) {
        currentbed = 0;
    } else {
        currentbed++;
    }
    bedImage.src = bedImages[currentbed];
    bedName.textContent = bedNames[currentbed];
    bedDescription.textContent = bedDescriptions[currentbed];
    bedImage.classList.remove("flip");
    }, 500);
})
const tableImage = document.getElementById('table-image');
const nexttableImage = document.getElementById('next-table-image');
const tableName = document.getElementById('table-product-name');
const tableDescription= document.getElementById('table-product-description')
let currenttable = 0;
const tableImages = [
    "pictures/table.jpg",
    "pictures/dinning.jpg",
    "pictures/dinner.jpg",
    "pictures/couch.jpg"
]
const tableNames = [
    "The Elara Dining Table",
    "The Haven Oak Table",
    "The Aurelia Table"
]
const tableDescriptions = [
    "Elegant and refined, designed to bring warmth, style, and effortless charm to every dining space.",
    "A timeless piece with a warm, inviting character, perfect for family meals and memorable gatherings.",
    "Beautifully crafted with a graceful modern design, bringing sophistication and functionality to your home."
]
tableImage.addEventListener("click", function() {
    tableImage.classList.add("flip");
 nexttableImage.src = tableImages[currenttable + 1];
    setTimeout(function(){
     if (currenttable === 2) {
        currenttable = 0;
    } else {
        currenttable++;
    }
    tableImage.src = tableImages[currenttable];
    tableName.textContent = tableNames[currenttable];
    tableDescription.textContent = tableDescriptions[currenttable];
    tableImage.classList.remove("flip");
    }, 500);
})
const chairImage = document.getElementById('chair-image');
const nextchairImage = document.getElementById('next-chair-image');
const chairName = document.getElementById('chair-product-name');
const chairDescription= document.getElementById('chair-product-description')
let currentchair = 0;
const chairImages = [
    "pictures/eggchair.jpg",
    "pictures/chair.jpg",
    "pictures/chairs.jpg",
    "pictures/Armchair.jpg"
]
const chairNames = [
    "Nova chair",
    "Luna Accent chair",
    "Aspen Lounge Chair",
    "Vera Armchair"
]
const chairDescriptions = [
   "A sleek, comfortable chair with contemporary design",
   "Soft, elegant and great for any corner",
   "Comfortable with a timeless look",
   "A blend of comfort and sophistication"
]
chairImage.addEventListener("click", function() {
    chairImage.classList.add("flip");
 nextchairImage.src = chairImages[(currentchair + 1) % chairImages.length];
    setTimeout(function(){
     if (currentchair === 3) {
        currentchair = 0;
    } else {
        currentchair++;
    }
    chairImage.src = chairImages[currentchair];
    chairName.textContent = chairNames[currentchair];
    chairDescription.textContent = chairDescriptions[currentchair];
    chairImage.classList.remove("flip");
    }, 500);
})
const homeImage = document.getElementById('home-image');
const nexthomeImage = document.getElementById('next-home-image');
const homeName = document.getElementById('home-product-name');
const homeDescription= document.getElementById('home-product-description')
let currenthome = 0;
const homeImages = [
    "pictures/home.jpg",
    "pictures/lamp.jpg",
    "pictures/must.jpg",
    "pictures/decor.jpg"
]
const homeNames = [
    "TidyNest Remote Holder ",
    "Lumina Accent Lamp",
    "Savora Spice Rack",
    "Willow Display Cabinet"
]
const homeDescriptions = [
   "A sleek organizer designed to keep your remote tidy and always within reach",
   "A modern accent lamp that fills your space with warmth and elegance",
   "A stylish spice organizer that keeps your kitchen neat and within easy reach",
   "A beautifully crafted cabinet for books, vases and decorative pieces"
]
homeImage.addEventListener("click", function() {
    homeImage.classList.add("flip");
 nexthomeImage.src = homeImages[(currenthome + 1) % homeImages.length];
    setTimeout(function(){
     if (currenthome === 3) {
        currenthome = 0;
    } else {
        currenthome++;
    }
    homeImage.src = homeImages[currenthome];
    homeName.textContent = homeNames[currenthome];
    homeDescription.textContent = homeDescriptions[currenthome];
    homeImage.classList.remove("flip");
    }, 500);
})