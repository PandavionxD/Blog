const menu_bar = document.querySelector('.menu-bar')
const menu_nav = document.querySelector('.menu-nav')

menu_bar.addEventListener('click',()=>{
    menu_nav.classList.toggle('mostrar')
})


let advertencia = 'Algunos enlaces aun faltan terminar pero el responsivo ya quedo, fue cansado pero ahi queda creo!!'
alert(advertencia)