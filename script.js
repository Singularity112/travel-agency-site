$(document).ready(function(){
    $('.header').click(function(){
        $(this).parent().children('.info').slideToggle('normal');
        return false;
    });
});