$(document).ready(function() {
  $('.offcanvas-toggle').on('click', function() {
    $('body').toggleClass('offcanvas-expanded');
    $('.canvas').toggleClass('active');
    $('.offcanvas-toggle').toggleClass('active');
    $('.menubar').toggleClass('active');
    $('.content').toggleClass('active');
  });
});
$(document).click(function(e) {
  if ((e.target != $('.offcanvas')[0]) && (e.target != $('.offcanvas-toggle')[0]) && ($('body').hasClass('offcanvas-expanded'))) {
    var li_tags = $($('.offcanvas')[0]).find('li');
    var a_tags = $($('.offcanvas')[0]).find('a');
    for (var i = 0; i < li_tags.length; i++) {
      if (e.target == li_tags[i] || e.target == a_tags[i]) {
        return;
      }
    }
    $('body').toggleClass('offcanvas-expanded');
    $('.canvas').toggleClass('active');
    $('.offcanvas-toggle').toggleClass('active');
    $('.menubar').toggleClass('active');
    $('.content').toggleClass('active');
  }
});
