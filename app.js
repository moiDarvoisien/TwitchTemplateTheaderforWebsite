$(function() {
    $('#body').toggleClass('white');
    $('#icon1').toggleClass('black-font');
    $('#textheader').toggleClass('black-font');
    $('#cc').toggleClass('black-font');
        $('#colorchanger').click(function(){
            $("#body").toggleClass('blanc black');
            $("#icon1").toggleClass('black-font white-font');
            $("#textheader").toggleClass('black-font white-font');
            $("#cc").toggleClass('black-font white-font');
        });
});
