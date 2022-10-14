$(document).ready(function () {
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {
        color: '#ffffff',
        stokeWidth: 8,
        duration: 5500,
        from: {
            color: '#363636'
        },
        to: {
            color: '#ffffff'
        },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 17000);
            circle.setText(value);
        }
    })

    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {
        color: '#ffffff',
        stokeWidth: 8,
        duration: 1000,
        from: {
            color: '#363636'
        },
        to: {
            color: '#ffffff'
        },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 15);
            circle.setText(value);
        }
    })

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {
        color: '#ffffff',
        stokeWidth: 8,
        duration: 2000,
        from: {
            color: '#363636'
        },
        to: {
            color: '#ffffff'
        },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 200);
            circle.setText(value);
        }
    })

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD, {
        color: '#ffffff',
        stokeWidth: 8,
        duration: 4000,
        from: {
            color: '#363636'
        },
        to: {
            color: '#ffffff'
        },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 6500);
            circle.setText(value);
        }
    })

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    setTimeout(function () {
        $('#data-area').parallax({
            imageSrc: '/IMG/Mazzi Fiori Casamentos/casamento-feliz-um-guia-para-casamentos-felizes.png'
        });
    }, 250);
});