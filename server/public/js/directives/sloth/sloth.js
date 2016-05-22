angular.module('yui').directive('changeCssDirective', function(){

  return  {
    restrict: 'A',
    link: function (scope, element, attribute) {

      $('.directive-btn').on('click', function(){

        $('#data').prepend('<img id="theImg" src="http://i.giphy.com/r8mOWbeL6Xixi.gif" />');
        $('#bad-crying-1').attr('src', 'http://i.giphy.com/svpdH8DjvDTxe.gif');
        $('.yui-info-box-text-sm').html('Hey You Guyyysssss!');
        $('.yui-info-box').css('background', 'url(http://i.giphy.com/rp1scHVlhkKrK.gif');
        $('#sloth-text').html('.');
        $('.video').remove();
        $('.yui-border-box-e').prepend('<img id="theImg"" src="http://i.giphy.com/TniotlrhXtkZ2.gif" />');
        $('#bad-crying-text').html('Saved by his pincers of peril!');
        $('.yui-logo-hide-box').css('background', 'url(http://i.giphy.com/3P3cTP0ToLS6c.gif');
        $('.yui-view-container').css('background-color', 'pink');
        $('.animation-container').css('background-color', 'pink');
        $('#audio').attr('src', './styles/images/sloth-sound.mp3');
        $('#good').attr('src', './styles/images/good.mp3');
      });
    }
  };
});
