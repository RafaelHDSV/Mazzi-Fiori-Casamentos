let preloader = document.querySelector('.preloader')
let imgWedding = document.getElementById('img_wedding')
let i2 = 0
let cardLow = document.querySelector('.card_low')
let buyLow = document.querySelector('.buy_low')
let cardMiddle = document.querySelector('.card_middle')
let buyMiddle = document.querySelector('.buy_middle')
let cardHigh = document.querySelector('.card_high')
let buyHigh = document.querySelector('.buy_high')

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
    1000)

cardLow.addEventListener('click', () => {
    cardLow.style.display = 'none'
    buyLow.style.display = 'flex'
})

buyLow.addEventListener('click', () => {
    buyLow.style.display = 'none'
    cardLow.style.display = 'flex'
})

cardMiddle.addEventListener('click', () => {
    cardMiddle.style.display = 'none'
    buyMiddle.style.display = 'flex'
})

buyMiddle.addEventListener('click', () => {
    buyMiddle.style.display = 'none'
    cardMiddle.style.display = 'flex'
})

cardHigh.addEventListener('click', () => {
    cardHigh.style.display = 'none'
    buyHigh.style.display = 'flex'
})

buyHigh.addEventListener('click', () => {
    buyHigh.style.display = 'none'
    cardHigh.style.display = 'flex'
})