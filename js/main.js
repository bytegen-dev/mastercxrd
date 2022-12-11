var navm = document.querySelector('.nav-mobile')
var feat = document.querySelector('.features')
var serv = document.querySelector('.services')

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
    // alert('hey')
    document.querySelector('.chat').classList.add('whitechat')
    
})

document.getElementById('chat').addEventListener('touchend', ()=>{
    // alert('hey')
    document.querySelector('.chat').classList.remove('whitechat')

})