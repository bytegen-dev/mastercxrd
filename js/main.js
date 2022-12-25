var navm = document.querySelector('.nav-mobile')
var feat = document.querySelector('.features')
var serv = document.querySelector('.services')
var left = document.getElementById('left')
var window = document.documentElement
var preloader = document.getElementById("preloader")
var hidepre = 'preloader.style.display = "none"'
var showlft = 'left.style.display = "flex"'


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
    setTimeout(
        hidepre, 1500
    )
}

function showleft(){
    left.style.display = "flex"
}

window.addEventListener("load", loaded)
window.addEventListener("load", setTimeout(showleft, 1500))