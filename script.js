let header = document.querySelector('header')
let itemsMobile = document.querySelector('.items_container_mobile')
let hamburguer = document.getElementById('hamburguer')
let hamburguerPath = document.getElementById('hamburguer_path')
let datas = document.getElementById('datas')
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
    // circleA.animate(1);

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
    // circleB.animate(1);

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
    // circleC.animate(1);

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
    // circleD.animate(1);


    setInterval(() => {
        let windowPosition = window.scrollY
        console.log(windowPosition);

        if (windowPosition >= 1600 && windowPosition <= 1800) {
            circleA.animate(1);
            circleB.animate(1);
            circleC.animate(1);
            circleD.animate(1);
        }
    }, 10)
};