chrome.app.runtime.onLaunched.addListener(function(){
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 1200;
	var height = 640;
	var main_window = chrome.app.window.get('main');
	if (main_window) {
		main_window.show();
	}else{
		
		chrome.app.window.create("main.html",{
			id:'main',
			bounds:{
				width:width,
				height:height,
				left: Math.round((screenWidth-width)/2),
				top:  Math.round((screenHeight-height)/2)
			},
			minHeight: height,
			minWidth:  width,
			maxHeight: height,
			maxWidth:  width,
			frame: 'none'
		});
	}
});