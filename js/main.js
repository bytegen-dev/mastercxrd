var navm = document.querySelector('.nav-mobile')
var feat = document.querySelector('.features')
var serv = document.querySelector('.services')
var window = document.documentElement
var preloader = document.getElementById("preloader")

function kaisen(){
    navm.classList.toggle('menu-drop')
}

function slash(){
    feat.classList.toggle('slash')
}

function slashh(){
    serv.classList.toggle('slash')
}

// document.querySelector('.chat')

document.getElementById('chat').addEventListener('touchstart', ()=>{
    document.querySelector('.chat').classList.add('whitechat')
})

document.getElementById('chat').addEventListener('touchend', ()=>{
    document.querySelector('.chat').classList.remove('whitechat')
})

function loaded() {
    preloader.style.display = "none"
}

window.addEventListener("load", loaded)