$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })
})

//메인비주얼 슬라이드
$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {

        loop: true,
        speed: 1000,

        //Effect creative #3
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, "-20%", -1],
            },
            next: {
                translate: [0, "100%", 0],
            },
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        on: {
            slideChangeTransitionEnd: function () {

                let num = this.realIndex;
                $('.main_visual .bar strong').text(num + 1)
                $('.main_visual .bar').addClass('on')
            },
            slideChangeTransitionStart: function () {
                $('.main_visual .bar').removeClass('on')
            },
        },
    });

    const mainNoticeSlide = new Swiper('.main_menu_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: '.main_menu .arrows .next',
            prevEl: '.main_menu .arrows .prev',
        },

        pagination: {
            el: '.main_menu_slide .page',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    let scw = true;
    $('.main_visual .bar button').on('click', function () {
        $(this).toggleClass('on');

        if (scw) {
            mainVisualSlide.autoplay.pause()
        } else {
            mainVisualSlide.autoplay.start()
        }

        scw = !scw;
    });


});



//슬라이드로 탭구현.
$('.main_visual_slide').on('afterChange', function (e, s, c) {
    $('.main_visual .lnk li').removeClass('on');
    $('.main_visual .lnk li').eq(c).addClass('on')
});



//play pause, go
let t = true;
$('.main_product .player .control').on('click', function () {
    $(this).toggleClass('on');

    if (t) {
        $('.main_product .player video').trigger('pause')
    } else {
        $('.main_product .player video').trigger('play')
    }

    t = !t;
})

var swiper = new Swiper(".main_menu_slide", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




// $('#header .menu').on('click', function () {
//     $(this).toggleClass('on');
//     $('#header .cover').toggleClass('on');
// });


// $('#header .cover a').on('click', function () {
//     $('#header .cover').removeClass('on');
//     $('#header .menu').removeClass('on');
// });


// $('#header .cover').on('wheel', function (e) {
//     e.stopPropagation();
// });




//top으로 올라가는 버튼
$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    });



    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }

    })
});

$(function () {
    $('.mobile_btn').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });


    $('#header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    })
})