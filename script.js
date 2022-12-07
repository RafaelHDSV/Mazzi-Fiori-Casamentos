let header = document.querySelector('header')
let itemsMobile = document.querySelector('.items_container_mobile')
let hamburguer = document.getElementById('hamburguer')
let sliderHeader = ['slider_header1.jpg', 'slider_header2.jpg', 'slider_header3.jpg', 'slider_header4.jpg', 'slider_header5.jpg']
let i = 0

const loop = setInterval(() => {
    i += 1

    if (i == 5) {
        i = 1
    }

    header.style.backgroundImage = `url("images/${sliderHeader[i]}")`
}, 5000)

const typed = new Typed('.auto_type', {
    strings: ['Incrível', 'Mágico', 'Inimaginável', 'Inesquecível', 'Perfeito', 'Magnífico', 'Sensacional', 'Excepcional', 'Completo', 'Satisfatório'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

hamburguer.addEventListener('click', () => {
    if (itemsMobile.style.display == 'none') {
        itemsMobile.style.display = 'flex'
    } else {
        itemsMobile.style.display = 'none'
    }
})