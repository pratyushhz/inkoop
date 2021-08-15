const menu = document.querySelector('.menu')
const header = document.querySelector('.header')
const body = document.querySelector('.body')

menu.addEventListener("click",()=>{
header.classList.toggle('hide')
body.classList.toggle('hide')
})