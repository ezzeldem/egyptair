$(document).ready(function(){

    
    
    
    // opne nav-menu
    $('.nav-bar-section .nav-box ul li').click(function(e){
        e.stopPropagation();
        $(this).children('.sub-menu').toggle();
        $(this).siblings('li').children('.sub-menu').hide();
    });
    $(document).click(function(){
        $('.nav-bar-section .nav-box ul li').children('.sub-menu').hide();
    });
    


    // search box
    $('.search-button').click(function(){
        $('.search-box-pop').addClass('open-pop-up');
        $('body').addClass('over-flow');
    });
    $('.search-box-pop .search-box-pop-form .close-pop-botton span').click(function(){
        $('.search-box-pop').removeClass('open-pop-up');
        $('body').removeClass('over-flow');
    });
    // opne menu
    $('.nav-bar-section .menu-icon').click(function(){
        $('.nav-bar-section .nav-box').addClass('opne-menu');
        $('body').addClass('over-flow');
        $('.over-lay').show();
    });
    $('.nav-bar-section .nav-box .close-icon, .over-lay').click(function(){
        $('.nav-bar-section .nav-box').removeClass('opne-menu');
        $('body').removeClass('over-flow');
        $('.over-lay').hide();
    });

    // datepicker
    $( ".inputdatepicker" ).datepicker();

});