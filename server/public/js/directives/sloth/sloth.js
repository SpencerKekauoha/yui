angular.module("yui").directive("changeCssDirective", function(){

  return  {
    restrict: "A",
    link: function (scope, element, attribute) {

      $('.directive-btn').on('click', function(){

        $('#data').prepend('<img id="theImg" src="http://i.giphy.com/r8mOWbeL6Xixi.gif" />');
        $('#bad-crying-1').attr("src", 'http://i.giphy.com/svpdH8DjvDTxe.gif');
        $(".yui-info-box-text-sm").html("Hey You Guyyysssss!");
        $(".yui-info-box").css("background", "url(http://i.giphy.com/rp1scHVlhkKrK.gif");
        $("#sloth-text").html(".");
        $(".video").remove();
        $('.yui-border-box-e').prepend('<img id="theImg" src="http://i.giphy.com/TniotlrhXtkZ2.gif" />');
        $('#bad-crying-text').html('Saved by his pincers of peril!');
        $('.yui-logo-hide-box').css("background", "url(http://i.giphy.com/3P3cTP0ToLS6c.gif");
        $(".yui-view-container").css("background-color", "pink");
        $(".animation-container").css("background-color", "pink");
      });
    }
  };
});

angular.module("yui").directive("changeBack", function(){

  return  {
    restrict: "A",
    link: function (scope, element, attribute) {

      $('.directive-back-btn').on('click', function(){

        $('#data').remove();
        $('#bad-crying-1').attr("src", '/styles/images/yui-info-card.png');
        $(".yui-info-box-text-sm").html("What is Yui?");
        $(".yui-info-box").css("background", "url(./styles/images/smoke.jpeg");
        $("#sloth-text").html("In Okinawan, Yui means to connect, collobrate, or come together as a group to acommplisha task.  Yui was created to connect designers with businesses that are in need of designs for their projects.");
        $(".video").prepend();
        $('.yui-border-box-e').prepend('<img id="theImg" src="http://i.giphy.com/TniotlrhXtkZ2.gif" />');
        $('#bad-crying-text').html('Yui welcomes designers of all fields to publish their work.');
        $('.yui-logo-hide-box').css("background", "url(http://i.giphy.com/3P3cTP0ToLS6c.gif");
        $(".yui-view-container").css("background-color", "#000");
        $(".animation-container").css("background-color", "#000");
      });
    }
  };
});
