$(function() {

    // redirecionamento de página
    $('.projeto, .smlink').click(function(e){
        e.preventDefault(); 
        var url = $(this).attr('href');
        window.open(url, '_blank'); 
    })
    

    // BANNER - cria o data-bg, que capta a imagem direto html
    var banner = $('.banner-content').data('bg');
    $('.banner-content').css('background-image', 'url('+ banner +')');
        

    //EXPERIÊNCIA PROFISSIONAL - anima a seta do collapse
    $('#rotina-trabalho p').on('click', function() {

        if( $(this).find('i').hasClass('anima') ) {
            $(this).find('i').toggleClass('anima-back'); 
        } else {
            $(this).find('i').toggleClass('anima');   
        }
     
    });
    

    // ACIONA/ENCOLHE O MENU MOBILE
    $('.mobile-trigger i').on('click', function(e) {
        $('.mobile-menu-wrapper').css('transform', 'translate(0%)');
        if(e.target.className != 'fa-solid fa-bars'){
            $('.mobile-menu-wrapper').css('transform', 'translate(-100%)');
        }
    });


    // ACIONA O MENU CASO HAJA ALTEARAÇÃO DO TAMANHO DA TELA
    $(window).resize(function() {
        $('.mobile-menu-wrapper').css('transform', 'translate(-100%)');
    });

    // ACIONA A BARRA FIXA
    $(document).on('scroll', function() {
        var d = $(this).scrollTop();
        if( d > 170){
            $('.navbar-area').addClass('navbar-fixed');
            $('.nav-scroll-content').removeClass('d-none')
        } else {
            $('.navbar-area').removeClass('navbar-fixed');
            $('.nav-scroll-content').addClass('d-none')
        }
    });

    // SCROLL ATÉ O ELEMENTO CLICADO
    $('.navbar-area a[href^="#"').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 500);
    });

    // SCROLL ATÉ O TOP
    $('.btn-top').on('click', function() {
        $("html, body").animate({scrollTop:0}, 1500)
    });


})
