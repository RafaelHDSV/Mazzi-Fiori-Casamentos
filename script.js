let header = document.querySelector('header')
let itemsMobile = document.querySelector('.items_container_mobile')
let hamburguer = document.getElementById('hamburguer')
let hamburguerPath = document.getElementById('hamburguer_path')
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
    if (itemsMobile.style.display == 'flex') {
        hamburguerPath.style.fill = 'var(--white)'
        itemsMobile.style.display = 'none'
    } else {
        hamburguerPath.style.fill = 'var(--black)'
        itemsMobile.style.display = 'flex'
    }
})