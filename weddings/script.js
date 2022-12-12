let preloader = document.querySelector('.preloader')
let imgWedding = document.getElementById('img_wedding')
let i2 = 0

window.addEventListener('load', () => {
    preloader.classList.add('hide')
    document.body.style.overflowY = 'visible'
})

const loopWeddings = setInterval(() => {
    i2 += 1

    if (i2 == 5) {
        i2 = 1
    }

    imgWedding.setAttribute('src', `../images/casamento_praia${i2}.jpg`)
}, 3000)