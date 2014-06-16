/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/

// JS EXAMPLE

var Base = Base || {};

Base.LoadVideos = function()
{	
	var videos = $('.videos');
	var videosLink = $('.videos h2');

	function init()
	{
		loadVideosFromJSON();
	}

	function loadVideosFromJSON()
	{
		$.ajax(
		{
			url:"videos.json",
			dataType:"json",
			success:function(data) {
				var i;
				for(i = 0; i < data['videos'].length; i++) {
					$(".videos").append('<h2 data-ytcode="' + data['videos'][i].id + '">' + data['videos'][i].title + '</h2>');
				}
			}
		});

		$(document).on('click', '.videos h2', function(){ 
		   var ytcode = $(this).data('ytcode');
		   $('.video-popup-box').html("<iframe width='495' height='278' src='//www.youtube.com/embed/" + ytcode + "?autoplay=1' frameborder='0' allowfullscreen></iframe>");
		});

	}

	init();
};
	

// ON DOC READY
$(function()
{	
	new Base.LoadVideos();
	
});

