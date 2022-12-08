let header = document.querySelector('header')
let itemsMobile = document.querySelector('.items_container_mobile')
let hamburguer = document.getElementById('hamburguer')
let hamburguerPath = document.getElementById('hamburguer_path')
let sliderHeader = ['slider_header1.jpg', 'slider_header2.jpg', 'slider_header3.jpg', 'slider_header4.jpg', 'slider_header5.jpg']
let i = 0
let datas = document.getElementById('datas')
let dots = document.getElementById('dots')
let quant = document.querySelectorAll('.image')
let imageSlider = document.getElementById('image')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let scrollSlider = true
let current = 0

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