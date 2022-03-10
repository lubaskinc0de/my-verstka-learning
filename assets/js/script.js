$(function() {
    var header = $("#header");
    var introHeight = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop(); /* сколько мы проскролили */

    /* Header fixed */
    checkScroll(scrollOffset); /* сразу на загрузке проверяем скролл */
    // даем хедеру актив при скролле 
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop(); /* присваиваем значение сколько проскролили */
        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introHeight) {
            header.addClass("fixed") // вот так
        } else {
            header.removeClass("fixed") // если нет то убираем класс
        }
    }

    /* Smooth scroll */
    /* при нажатии на кнопку скроллим к выбранному элементу */
    $("[data-scroll]").on("click", function(event) {
        // при клике
        event.preventDefault();
        var $this = $(this)
        var blockId = $(this).data('scroll'); /* вытаскиваем тот элемент на который нажали */
        var blockOffset = $(blockId).offset().top; // получаем позицию блока
        $("#nav a").removeClass("active") // а других ссылок забираем
        $this.addClass("active") // добавляем нажатой ссылке актив
            // теперь плавно скроллим 
        $("html,body").animate({
            scrollTop: blockOffset
        }, 500)
    })

    /* Nav toggle */
    // делаем бургер меню
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault(); /* если не прописать то при нажатии будет скачок вверх страницы */
        $(this).toggleClass("active") // хедеру крестик
        $("#nav").toggleClass("active"); // пишем какой класс мы хотим добавлять и разворачиваем меню 
    });

    /* Accordion toggle */
    // пишем раскрытие аккордеона
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this) // то на что мы нажали
        var blockId = $this.data("collapse") // получаем айди того на что мы нажали (те получаем тот элемент который нужно раскрыть) data(collapse) это то че мы в html прописали после data-

        $(blockId).slideToggle(); /* плавное открытие и закрытие элемента */
        $this.toggleClass("active"); // разворачиваем стрелочку
    });
    /* Slider на слик джс */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1, // сколько надо показывать слайдов на 1 скролл
        slidesToScroll: 1, // кол во слайдов
    })
});