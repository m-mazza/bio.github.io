$(function() {

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
    

    // NAVBAR MOBILE
    $('.mobile-trigger i').on('click', function(e) {
        $('.mobile-menu-wrapper').css('transform', 'translate(0%)');
        if(e.target.className != 'fa-solid fa-bars'){
            $('.mobile-menu-wrapper').css('transform', 'translate(-100%)');
        }
    });

    $(window).resize(function() {
        $('.mobile-menu-wrapper').css('transform', 'translate(-100%)');
    })

})
