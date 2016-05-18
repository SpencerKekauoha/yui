$(window).scroll(function(){

  var winScroll = $(this).scrollTop();

  $('.featured-work-link-container').css({
    'transform': 'translate(0px, -'+ winScroll /2 +'%)'
  });

  $('.featured-text').css({
    'transform': 'translate(0px, '+ winScroll /2 +'%)'
  });

  $('.dancing-container').css({
    'transform': 'translate(0px, '+ winScroll /3.5 +'%)'
  });

  if(winScroll > $('.image-flow-container').offset().top - ($(window).height() / 2)) {
    $('.image-flow').each(function(i){
      setTimeout(function(){
        $('.image-flow').eq(i).addClass('is-showing');
      }, 300 * (i+1));
    });
  }
});
