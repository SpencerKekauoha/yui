$(window).scroll(function(){

  var winScroll = $(this).scrollTop();

  $('.yui-logo').css({
    'transform': 'translate(0px, '+ winScroll /2 +'%)'
  });

  $('.featured-text').css({
    'transform': 'translate(0px, -'+ winScroll /2 +'%)'
  });

});
