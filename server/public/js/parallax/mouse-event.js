$(document).ready(function() {
  $('html').mousemove(function(e){

        var amountMovedX = (e.pageX * 1 / 2);
        var amountMovedY = (e.pageY * 1 / 2);

        $('.featured-text').css({'transform': 'translate(-'+ amountMovedX /100 + '%, -'+ amountMovedY /2 + '%)'});
        $('.featured-image').css({'transform': 'translate('+ amountMovedX /100 + '%, -'+ amountMovedY /50 + '%)'});
        $('.featured-work-link-container').css({'transform': 'translate('+ amountMovedX /10 + '%, -'+ amountMovedY /50 + '%)'});

  });
});
