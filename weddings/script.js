let preloader = document.querySelector('.preloader')
let imgWedding = document.getElementById('img_wedding')
let i2 = 0

window.addEventListener('load', () => {
    preloader.classList.add('hide')
    document.body.style.overflowY = 'visible'
})

imgWeddingCurrent = imgWedding.getAttribute('src')
imgWeddingCurrent = imgWeddingCurrent.replace('../images/casamento_', '')
imgWeddingCurrent = imgWeddingCurrent.replace('1.jpg', '')

if (imgWeddingCurrent == 'praia') {
    weddingType = 'praia'
} else if (imgWeddingCurrent == 'igreja') {
    weddingType = 'igreja'
} else if (imgWeddingCurrent == 'eucaliptos') {
    weddingType = 'eucaliptos'
} else if (imgWeddingCurrent == 'noivas') {
    weddingType = 'noivas'
} else if (imgWeddingCurrent == 'moderno') {
    weddingType = 'moderno'
} else if (imgWeddingCurrent == 'livre') {
    weddingType = 'livre'
} else if (imgWeddingCurrent == 'campo') {
    weddingType = 'campo'
} else if (imgWeddingCurrent == 'fazenda') {
    weddingType = 'fazenda'
} else if (imgWeddingCurrent == 'vibrante') {
    weddingType = 'vibrante'
}

const loopWeddings = setInterval(() => {
        i2 += 1

        if (i2 == 5) {
            i2 = 1
        }

        imgWedding.setAttribute('src', `../images/casamento_${weddingType}${i2}.jpg`)
    },
    1500)