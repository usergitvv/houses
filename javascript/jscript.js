$(document).ready(function() {
    
    alert('Это учебно-демонстрационный одностраничный сайт, любые совпадения с реально существующими сайтами случайны!');  
           
        
    // +++++++++++++ Nav Toggle on mobile +++++++++++++
    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function() {

        nav.toggleClass('show');
        navToggle.toggleClass('opened');
        
        $('body').toggleClass('lock');

    });

    // ++++++++++ Smooth scroll to sections +++++++++++++++

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let scrollEl = $(this).data('scroll');
        let scrollElPos = $(scrollEl).offset().top;
        
        $(':root').animate({
            scrollTop: scrollElPos - ($('.header').height()/2)
        }, 400);

    });

    // ++++++++++ ScrollSpy +++++++++++++++

    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();

    scrollSpy(scrollTop);

    $(window).on('scroll', function() {
        scrollTop = $(this).scrollTop();
               
        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $('[data-scrollspy]').each(function() {            
            

            let sectionId = $(this).data('scrollspy');
            let sectionOffset = $(this).offset().top;            

            if(scrollTop >= (sectionOffset - (windowHeight * 0.3333))) {
                $('#nav [data-scroll]').removeClass('active');
                
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');                
                
                nav.removeClass('show');
                navToggle.removeClass('opened');        
                $('body').removeClass('lock');
            }            

            else if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('active');
            }           
            
        });
    }
    
    $(window).on('orientationchange', function() {
        nav.removeClass('show');
        navToggle.removeClass('opened');        
        $('body').removeClass('lock');
    });


    // +++++++++++++++++++ Modal ++++++++++++++++++++++++++

    $('#btnForm').on('click', function() {
        $('.modal').fadeIn(300).addClass('modal__opened');
        $('body').addClass('lock');

        setTimeout(alertWindow, 400);
    });

    function alertWindow() {
        alert('Attention, this modal window is demonstrative');
    }


    $('.modal__close').on('click', function() {       

        $('.modal').fadeOut(300).removeClass('modal__opened');
        $('body').removeClass('lock');
    });

    $('body').keyup(function(event) {
        
        if (event.which == 27) {
            $('.modal').fadeOut(300).removeClass('modal_opened');
            $('body').removeClass('lock');
        }
    });


    // ++++++++++++++++ AOS Block-animation ++++++++++++++++++

    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'linear', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
    
})
