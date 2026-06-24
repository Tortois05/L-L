const openBtn = document.getElementById("openBtn");
const flap = document.querySelector(".flap");
const invitation = document.getElementById("invitation");
const envelopeScreen = document.getElementById("envelope-screen");
const seal = document.querySelector(".wax-seal");
const content = document.querySelector(".envelope-content");
const bottomFlap = document.querySelector(".bottom-flap");
const petals = document.getElementById("petals");

const images = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg"
];

let currentImage = 0;

const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("galleryImage");
const openGallery = document.getElementById("openGallery");
const closeGallery = document.querySelector(".close-gallery");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const current = document.getElementById("current");
const total = document.getElementById("total");

total.innerHTML = images.length;

function showImage(index){

    modalImage.src = images[index];
    current.innerHTML = index + 1;

}

/* ===========================
   ABRIR SOBRE
=========================== */

openBtn.addEventListener("click", () => {

    sessionStorage.setItem("envelopeOpened", "true");

    seal.classList.add("hide");
    content.classList.add("open");
    flap.classList.add("open");
    createPetals();

    setTimeout(() => {

        bottomFlap.classList.add("open");

    },250);

    setTimeout(() => {

        envelopeScreen.classList.add("fade-out");
        invitation.classList.add("show");

    },900);

    setTimeout(() => {

        document.querySelectorAll(".reveal").forEach(el => {
            observer.observe(el);
        });

    },300);

    setTimeout(() => {

        envelopeScreen.remove();

    },1800);

});

/* ===========================
   GALERÍA
=========================== */

openGallery.addEventListener("click",()=>{

    modal.classList.add("show");
    showImage(currentImage);

});

closeGallery.addEventListener("click",()=>{

    modal.classList.remove("show");

});

next.addEventListener("click",()=>{

    currentImage++;

    if(currentImage >= images.length){
        currentImage = 0;
    }

    showImage(currentImage);

});

prev.addEventListener("click",()=>{

    currentImage--;

    if(currentImage < 0){
        currentImage = images.length - 1;
    }

    showImage(currentImage);

});

/* ===========================
   ANIMACIONES AL SCROLL
=========================== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.18
});

reveals.forEach(el=>observer.observe(el));

function createPetals(){

    for(let i=0;i<30;i++){

        const petal=document.createElement("div");

        petal.classList.add("petal");

        petal.style.left=Math.random()*100+"vw";

        petal.style.animationDuration=
            (3+Math.random()*3)+"s";

        petal.style.animationDelay=
            Math.random()*1.2+"s";

        petal.style.transform=
            `rotate(${Math.random()*360}deg)`;

        petals.appendChild(petal);

        petal.addEventListener("animationend",()=>{

            petal.remove();

        });

    }

}