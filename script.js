let header = document.querySelector('header')
let itemsMobile = document.querySelector('.items_container_mobile')
let hamburguer = document.getElementById('hamburguer')
let hamburguerPath = document.getElementById('hamburguer_path')
let sliderHeader = ['slider_header1.jpg', 'slider_header2.jpg', 'slider_header3.jpg', 'slider_header4.jpg', 'slider_header5.jpg']
let i = 0
let datas = document.getElementById('datas')

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

window.onload = function onLoad() {
    var circleA = new ProgressBar.Circle('#circleA', {
        color: '#E8F1F2',
        duration: 1000,
        easing: 'easeInOut',
        from: {
            color: '#171D26'
        },
        to: {
            color: '#E8F1F2'
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 15);
            circle.setText(value);
        }
    });

    var circleB = new ProgressBar.Circle('#circleB', {
        color: '#E8F1F2',
        duration: 2000,
        easing: 'easeInOut',
        from: {
            color: '#171D26'
        },
        to: {
            color: '#E8F1F2'
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 200);
            circle.setText(value);
        }
    });

    var circleC = new ProgressBar.Circle('#circleC', {
        color: '#E8F1F2',
        duration: 3250,
        easing: 'easeInOut',
        from: {
            color: '#171D26'
        },
        to: {
            color: '#E8F1F2'
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 6500);
            circle.setText(value);
        }
    });

    var circleD = new ProgressBar.Circle('#circleD', {
        color: '#E8F1F2',
        duration: 7500,
        easing: 'easeInOut',
        from: {
            color: '#171D26'
        },
        to: {
            color: '#E8F1F2'
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 17000);
            circle.setText(value);
        }
    });


    setInterval(() => {
        let windowPosition = window.scrollY

        if (windowPosition >= 1600 && windowPosition <= 1800) {
            circleA.animate(1);
            circleB.animate(1);
            circleC.animate(1);
            circleD.animate(1);
        }
    }, 10)
};

// SLIDER
let dots = document.getElementById('dots')
let quant = document.querySelectorAll('.image')
let imageSlider = document.getElementById('image')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let scrollSlider = true
let current = 0

for (let i = 0; i < quant.length; i++) {
    let div = document.createElement('div')
    div.id = i
    dots.appendChild(div)
}

document.getElementById('0').classList.add('imgAtual')

let positionSlider = document.querySelectorAll('.dots div')

for (let i2 = 0; i2 < positionSlider.length; i2++) {
    positionSlider[i2].addEventListener('click', () => {
        current = positionSlider[i2].id
        scrollSlider = false
        slider()
    })
}

prev.addEventListener('click', () => {
    current--
    scrollSlider = false
    slider()
})

next.addEventListener('click', () => {
    current++
    scrollSlider = false
    slider()
})

function slider() {
    if (current >= quant.length) {
        current = 0
    } else if (current < 0) {
        current = quant.length - 1
    }

    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imageSlider.style.marginLeft = -30 * current + 'rem'
    document.getElementById(current).classList.add('imgAtual')
}

setInterval(() => {
    if (scrollSlider) {
        current++
        slider()
    } else {
        scrollSlider = true
    }
}, 4000)

// SLIDER 1
let dots1 = document.getElementById('dots1')
let quant1 = document.querySelectorAll('.image1')
let imageSlider1 = document.getElementById('image1')
let prev1 = document.getElementById('prev1')
let next1 = document.getElementById('next1')
let scrollSlider1 = true
let current1 = 5

for (let i3 = 0; i3 < quant1.length; i3++) {
    let div1 = document.createElement('div')
    div1.id = i3 + 5
    dots1.appendChild(div1)
}

document.getElementById('5').classList.add('imgAtual1')

let positionSlider1 = document.querySelectorAll('.dots1 div')

for (let i4 = 0; i4 < positionSlider1.length; i4++) {
    positionSlider1[i4].addEventListener('click', () => {
        current1 = positionSlider1[i4].id
        scrollSlider1 = false
        slider1()
    })
}

prev1.addEventListener('click', () => {
    current1--
    scrollSlider1 = false
    slider1()
})

next1.addEventListener('click', () => {
    current1++
    scrollSlider1 = false
    slider1()
})

function slider1() {
    if (current1 >= 5 + (quant1.length)) {
        current1 = 5
    } else if (current1 < 5) {
        current1 = 5 + (quant1.length) - 1
    }

    document.querySelector('.imgAtual1').classList.remove('imgAtual1')
    imageSlider1.style.marginLeft = -30 * (current1 - 5) + 'rem'
    document.getElementById(current1).classList.add('imgAtual1')
}

setInterval(() => {
    if (scrollSlider1) {
        current1++
        slider1()
    } else {
        scrollSlider1 = true
    }
}, 4000)

// SLIDER 2
let dots2 = document.getElementById('dots2')
let quant2 = document.querySelectorAll('.image2')
let imageSlider2 = document.getElementById('image2')
let prev2 = document.getElementById('prev2')
let next2 = document.getElementById('next2')
let scrollSlider2 = true
let current2 = 10

for (let i5 = 0; i5 < quant2.length; i5++) {
    let div2 = document.createElement('div')
    div2.id = i5 + 10
    dots2.appendChild(div2)
}

document.getElementById('10').classList.add('imgAtual2')

let positionSlider2 = document.querySelectorAll('.dots2 div')

for (let i6 = 0; i6 < positionSlider2.length; i6++) {
    positionSlider2[i6].addEventListener('click', () => {
        current2 = positionSlider2[i6].id
        scrollSlider2 = false
        slider2()
    })
}

prev2.addEventListener('click', () => {
    current2--
    scrollSlider2 = false
    slider2()
})

next2.addEventListener('click', () => {
    current2++
    scrollSlider2 = false
    slider2()
})

function slider2() {
    if (current2 >= 10 + (quant2.length)) {
        current2 = 10
    } else if (current2 < 10) {
        current2 = 10 + (quant2.length) - 1
    }

    document.querySelector('.imgAtual2').classList.remove('imgAtual2')
    imageSlider2.style.marginLeft = -30 * (current2 - 10) + 'rem'
    document.getElementById(current2).classList.add('imgAtual2')
}

setInterval(() => {
    if (scrollSlider2) {
        current2++
        slider2()
    } else {
        scrollSlider2 = true
    }
}, 4000)

// SLIDER 3
let dots3 = document.getElementById('dots3')
let quant3 = document.querySelectorAll('.image3')
let imageSlider3 = document.getElementById('image3')
let prev3 = document.getElementById('prev3')
let next3 = document.getElementById('next3')
let scrollSlider3 = true
let current3 = 15

for (let i7 = 0; i7 < quant3.length; i7++) {
    let div3 = document.createElement('div')
    div3.id = i7 + 15
    dots3.appendChild(div3)
}

document.getElementById('15').classList.add('imgAtual3')

let positionSlider3 = document.querySelectorAll('.dots3 div')

for (let i8 = 0; i8 < positionSlider3.length; i8++) {
    positionSlider3[i8].addEventListener('click', () => {
        current3 = positionSlider3[i8].id
        scrollSlider3 = false
        slider3()
    })
}

prev3.addEventListener('click', () => {
    current3--
    scrollSlider3 = false
    slider3()
})

next3.addEventListener('click', () => {
    current3++
    scrollSlider3 = false
    slider3()
})

function slider3() {
    if (current3 >= 15 + (quant3.length)) {
        current3 = 15
    } else if (current3 < 15) {
        current3 = 15 + (quant3.length) - 1
    }

    document.querySelector('.imgAtual3').classList.remove('imgAtual3')
    imageSlider3.style.marginLeft = -30 * (current3 - 15) + 'rem'
    document.getElementById(current3).classList.add('imgAtual3')
}

setInterval(() => {
    if (scrollSlider3) {
        current3++
        slider3()
    } else {
        scrollSlider3 = true
    }
}, 4000)