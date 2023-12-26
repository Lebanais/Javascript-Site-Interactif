"use strcit"
document.addEventListener("DOMContentLoaded",function(){
    const icon=document.getElementById("icon")
    const menu=document.getElementById("menu")
    icon.addEventListener("click",function(){
        menu.classList.toggle('active');
    });
});

let mode=document.getElementById("mode");
let body=document.querySelector("body");
let texte2=document.querySelector("h2");
let texte3=document.querySelector("h3");
let swiper=document.querySelector("swiper-slide");
mode.addEventListener("click",function clear(){
    if (body.style.background=="rgba(16, 34, 88, 0.9)"){
        body.style.background="rgba(112, 134, 199, 0.9)"
        swiper.style.background="rgba(255, 255, 255, 0.9)"
        texte2.style.color="rgba(0, 0, 0, 0.9)"
        mode.textContent="Dark Mode"
        texte3.style.color="rgba(0, 0, 0, 0.9)";}
    else {
        body.style.background="rgba(16, 34, 88, 0.9)"
        swiper.style.background="rgba(58, 65, 87, 0.9)"
        texte2.style.color="rgba(134, 134, 134, 0.774)"
        mode.textContent="Light Mode"
        texte3.style.color="rgba(134, 134, 134, 0.774)";}
    }
);

let btSquid=document.getElementById("squid");
btSquid.addEventListener('click',function TourneSquid(){
    let SquidImage=document.getElementById("squid").getAttribute('src');
    switch(SquidImage){
        case 'js/carousel/spear.png':
            document.getElementById('squid').src='js/carousel/humboldt.png'
            break;
        case 'js/carousel/humboldt.png':
            document.getElementById('squid').src='js/carousel/cuttlefish.png'
            break;
        case 'js/carousel/cuttlefish.png':
            document.getElementById('squid').src='js/carousel/spear.png'
    }
});

let btShark=document.getElementById("shark");
btShark.addEventListener('click',function TourneShark(){
    let SharkImage=document.getElementById("shark").getAttribute('src');
    switch(SharkImage){
        case 'js/carousel/tiger.png':
            document.getElementById('shark').src='js/carousel/thresher.png'
            break;
        case 'js/carousel/thresher.png':
            document.getElementById('shark').src='js/carousel/porbeagle.png'
            break;
        case 'js/carousel/porbeagle.png':
            document.getElementById('shark').src='js/carousel/tiger.png'
    }
});

let btJelly=document.getElementById("jelly");
btJelly.addEventListener('click',function TourneJelly(){
    let JellyImage=document.getElementById("jelly").getAttribute('src');
    switch(JellyImage){
        case 'js/carousel/box.png':
            document.getElementById('jelly').src='js/carousel/barrel.png'
            break;
        case 'js/carousel/barrel.png':
            document.getElementById('jelly').src='js/carousel/phantom.png'
            break;
        case 'js/carousel/phantom.png':
            document.getElementById('jelly').src='js/carousel/box.png'
    }
});