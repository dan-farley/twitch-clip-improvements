$( document ).ready(function() {
	setTimeout(function() {
		// grab video element to check if video is paused/unpaused
		var video = jQuery('.video-player__container').children('video');
		var videoElement = video.get(0);

		// make video content nearly full-width
		jQuery('.clips-watch').css('max-width', '95%');
		jQuery('.clips-sidebar').css('height', 'auto');

		// remove social share buttons
		jQuery('.tw-mg-y-1.tw-animation .tw-z-above').remove(); 

		var check = setInterval(function() {
			if (!videoElement.paused) {
				jQuery('.clips-chat__content button').trigger("click"); // if video isn't paused then force the chat to scroll down
			}
		}, 50); // check every 50ms to see if the video was paused or not.  
	}, 1500); // wait for full document load
});
