$(document).ready(function(){

        $('.alacarte').on('click', '.div1', function() {
           $(this).toggleClass('on');
    });

        $('.alacarte').on('click', '.div2', function() {
           $(this).toggleClass('on');
    });

        $('.alacarte').on('click', '.div3', function() {
           $(this).toggleClass('on');
    });

        $('.alacarte').on('click', '.div4', function() {
           $(this).toggleClass('on');

    });

        $('.alacarte').on('click', this, function() {
           $(this).toggleClass('expanded');

});
});
