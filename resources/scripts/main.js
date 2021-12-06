$(document).ready(() => {
    $('.home-button').on('mouseenter', event => { 
        $(event.currentTarget)
        .addClass('hover')
        .on('mouseleave', event =>{
            $(event.currentTarget).removeClass('hover');
        });
    });

    $('.products-button').on('mouseenter', event => { 
        $(event.currentTarget)
        .addClass('hover')
        .on('mouseleave', event =>{
            $(event.currentTarget).removeClass('hover');
        });
    });

    $('.contact-button').on('mouseenter', event => { 
        $(event.currentTarget)
        .addClass('hover')
        .on('mouseleave', event =>{
            $(event.currentTarget).removeClass('hover');
        });
    });
    $('nav .menu').on('mouseenter', event => { 
        $(event.currentTarget)
        .addClass('hover')
        .on('mouseleave', event =>{
            $(event.currentTarget).removeClass('hover');
        });
    });
    var animationSpeed = 1000; // How quickly the next slide animates.
    var pause = 3000; // The pause between each slide.
    var interval;

    function startSlider() {
        $('.slides > .first')
        .fadeOut(animationSpeed)
        .next()
        .fadeIn(animationSpeed)
        .end()
        .appendTo('.slide');
    }

    interval = setInterval( startSlider(), pause);
    
    $('.pause').on('click',event => {
        clearInterval(interval);
        $(event.currentTarget).hide();
        $('.play').show();
    });

    $('.play').hide(); // Hiding the play button.
    $('.pause').on('click', event => {
        clearInterval(interval);
        $(event.currentTarget).hide();
        $('.play').show();
    });

    $('.more-one').on('click', event => {
        $(event.currentTarget).toggleClass('hover');
       $('.desc-one').slideToggle(700);
    });

    $('.more-two').on('click', event => {
        $(event.currentTarget).toggleClass('hover');
        $('.desc-two').slideToggle(700);
    });
    $('.more-three').on('click', event => {
        $(event.currentTarget).toggleClass('hover');
        $('.desc-three').slideToggle(700);
    }); 
    $('.more-four').on('click', event => {
        $(event.currentTarget).toggleClass('hover');
        $('.desc-four').slideToggle(700);
    }); 
    $('.more-five').on('click', event => {
        $(event.currentTarget).toggleClass('hover');
        $('.desc-five').slideToggle(700);
    }); 
    $('.more-six').on('click', event => {
        $(event.currentTarget).toggleClass('hover');
        $('.desc-six').slideToggle(700);
    }); 

    

})