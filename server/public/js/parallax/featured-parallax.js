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

  $('.yui-welcome-box').css({
    'transform': 'translate(0px, -'+ winScroll /5 +'%)'
  });

  $('.yui-border-box-a').css({
    'transform': 'translate(0px, -'+ winScroll /10 +'%)'
  });

  $('.yui-border-box-b').css({
    'transform': 'translate(0px, -'+ winScroll /2 +'%)'
  });

  $('.yui-border-box-c').css({
    'transform': 'translate(0px, -'+ winScroll /10 +'%)'
  });

  $('.yui-border-box-d').css({
    'transform': 'translate(0px, -'+ winScroll /2 +'%)'
  });

  $('.yui-info-box').css({
    'transform': 'translate(0px, '+ winScroll /100 +'%)'
  });


  $('.yui-info-box-text-sm').css({
    'transform': 'translate(0px, -'+ winScroll /2 +'%)'
  });



  if(winScroll > $('.image-flow-container').offset().top - ($(window).height() / 2)) {
    $('.image-flow').each(function(i){
      setTimeout(function(){
        $('.image-flow').eq(i).addClass('is-showing');
      }, 300 * (i+1));
    });
  }
});
