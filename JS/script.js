/*global $, console, alert*/

$(function () {
    
    'use strict';
    
    // arrow in the header.
    
    $('header .container .arrow').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.feature').offset().top
            
        }, 1000);
    });
    
    $('header .container main button:first').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        }, 1000);
    });
    
    $('header .container main button:last').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-work').offset().top
            
        }, 1000);
    });
    
    // for show more projects in our works
    
    $('.our-work .show-more').click(function () {
        
        $('.our-work .boxes .hidden').fadeIn(1000);
        
        $('.our-work .show-more').remove();
    });
    
    var leftArrow = $('.testmonial .fa-chevron-left'),
        rightArrow = $('.testmonial .fa-chevron-right');
    
    // to check the arrows if it's in the first client is active the left arrow is hidden and if last client is active the right arrow is hidden.
    
    function checkClients() {
        
        $('.client:first').hasClass('active') ? leftArrow.hide() : leftArrow.show();
        
        $('.client:last').hasClass('active') ? rightArrow.hide() : rightArrow.show();

    }
    
    checkClients();
    
    $('.testmonial .fa-chevron-right').click(function () {
        
        $('.testmonial .active').fadeOut(500,function () {
            
            $(this).removeClass('active').next().addClass('active').fadeIn(500);
            
            checkClients();
            
        });
        
    });
    
    $('.testmonial .fa-chevron-left').click(function () {
        
        $('.testmonial .active').fadeOut(500,function () {
            
            $(this).removeClass('active').prev().addClass('active').fadeIn(500);
            
            checkClients();
            
        });
        
    });
});
