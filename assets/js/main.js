$(function() {


    var banner = $('.banner-content').data('bg');
    $('.banner-content').css('background-image', 'url('+ banner +')');
        

    $('#rotina-trabalho p').on('click', function() {

        if( $(this).find('i').hasClass('anima') ) {
            $(this).find('i').toggleClass('anima-back'); 
        } else {
            $(this).find('i').toggleClass('anima');   
        }
     
    });
    


})
