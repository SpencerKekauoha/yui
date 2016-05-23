angular.module('yui').directive('kanyeCssDirective', function(){

  return  {
    restrict: 'A',
    link: function (scope, element, attribute) {

      $('.directive-btn').on('click', function(){
        $('.featured-image').css('background', 'url(http://65.media.tumblr.com/8ff38c5853651e9061f290d7850b178a/tumblr_o0911zgO6p1s1kpsco1_1280.jpg');
        $('.featured-image').css('background-size', 'cover');
        $('.featured-container').css('background', 'url(http://lolworthy.com/wp-content/uploads/2016/02/kylo-ren-making-a-murderer.jpg');
        $('.featured-text').html('Emo Kylo Ren');
        $('.featured-text').css('color', 'rgb(220, 51, 255)');
        $('#featured-link').html('View Tears');
        $('#featured-link').css('color', 'rgb(220, 51, 255)');
        $('#featured-link').attr('href', 'https://www.buzzfeed.com/ryanhatesthis/theres-an-emo-kylo-ren-twitter-account-and-its-totally-perfe?utm_term=.cnk2XOZpv#.qjP82Vkd4')
        $('.image-flow').attr('src', 'http://starecat.com/content/wp-content/uploads/star-wars-family-photoshopped-leia-kylo-ren-nien-nunb.jpg');
        $('#star-audio').attr('src', 'http://www.thesoundarchive.com/starwars/star-wars-theme-song.mp3');
      });
    }
  };
});
