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
let texte2=document.querySelector("h1");
mode.addEventListener("click",function clear(){
    if (body.style.background=="rgba(16, 34, 88, 0.9)"){
        body.style.background="rgba(112, 134, 199, 0.9)"
        texte2.style.color="rgba(0, 0, 0, 0.9)"
        mode.textContent="Dark Mode";}
    else {
        body.style.background="rgba(16, 34, 88, 0.9)"
        texte2.style.color="rgba(134, 134, 134, 0.774)"
        mode.textContent="Light Mode";
    }}
);

function Trouver() {
    var radios = document.getElementsByName('note');
    var reponse;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            reponse = radios[i].value;
            return reponse;
        }
    }}
let resultat=document.getElementById("resultat");
resultat.addEventListener("click",function recevoir(event){
    let pseudo=document.getElementById("pseudo").value
    let commentaire=document.getElementById("commentaire").value
    let nom=document.getElementById("nom")
    let avis=document.getElementById("texte")
    nom.textContent="Merci de ton avis "+pseudo
    let note=Trouver()
    avis.textContent="Note de "+note+" :"+commentaire
    event.preventDefault();
});