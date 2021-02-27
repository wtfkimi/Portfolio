$(function() {
    const worksSlider = $('[data-slider="slick"]');
    /* Filter
    * ============================================== */
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();
        let cat = $(this).data('filter');
        if (cat === "all"){
            $("[data-cat]").removeClass('hide')
        }else {
            $("[data-cat]").each(function (){
                let workCat = $(this).data('cat');
                if (workCat !== cat) {
                    $(this).addClass('hide');
                }else {
                    $(this).removeClass('hide');
                }
            });
        }

    })
    /* Modal
    * ============================================== */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        setTimeout(function () {
            $(modalId).find('.modal_dialog').css({
                transform: "scale(1)"
            });
        }, 390);
        worksSlider.slick('setPosition');

    })

    modalClose.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal_dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 390);

    })

    $(".modal").on('click', function () {
        $(".modal").find(".modal_dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $(".modal").removeClass('show');
            $("body").removeClass('no-scroll');
        }, 390);
    });

    $(".modal_dialog").on('click', function (event) {
        event.stopPropagation();
        //Если мы клик по модал_диалогу, то мы отменяем событие клик по родителю
    })



    /* Slider: https://kenwheeler.github.io/slick/
    * ============================================== */

    worksSlider.slick({
        infinite: true, // что бы наши слайды бесконечно крутились
        slidesToShow: 1, // будем показывать один слайд
        slidesToScroll: 1, // скролить по одному слайду
        fade: true, //Эффект затухания при перелистывании слайдов
        arrows: false, // Показ/скрытие навигационных кнопок
        dots: true // Показ/скрытие навигационных точек под слайдером
    });


    // $('.slickPrev').on('click', function (event) {
    //     event.preventDefault();
    //     $('#worksSlider').slick('slickPrev')
    // })
    slickPrevOrNext('.slickPrev', 'slickPrev');
    slickPrevOrNext('.slickNext', 'slickNext');







});


//____________________________________________________*HELPERS*_________________________________________________________
function slickPrevOrNext (slickClass, method) {
    $(slickClass).on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.modal').find('[data-slider=\"slick\"]');

        currentSlider.slick(method)
    })
}