$(document).ready(function(){


    // search box
    $('.search-button').click(function(){
        $('.search-box-pop').addClass('open-pop-up');
        $('body').addClass('over-flow');
    });
    $('.search-box-pop .search-box-pop-form .close-pop-botton span').click(function(){
        $('.search-box-pop').removeClass('open-pop-up');
        $('body').removeClass('over-flow');
    });

    // niceSelect
    $(".select-box").niceSelect();

    
});