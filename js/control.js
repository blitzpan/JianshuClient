//webwiew methods
window.onload = function(){
	var web_content = document.getElementById('web_content');
	web_content.src="http://www.jianshu.com/";
	web_content.addContentScripts([
  	{
	    name: 'jianshu',
	    matches: ['http://*.jianshu.com/*'],
	    css: { files: ['css/jianshu.css'] },
	    js: { files: ['js/jquery-2.0.0.min.js','js/jianshu.js'] },
	    run_at: 'document_start'
	}]);
	web_content.addEventListener('loadcommit',
	function(e) {
		web_content.executeScript({ file: "js/jquery-2.0.0.min.js" });
		web_content.executeScript({ file: "js/jianshu.js" });
	});

	var current_window = chrome.app.window.current();

	document.getElementById('minimize').onclick = function(){
		current_window.minimize();
	}

	document.getElementById('close').onclick = function(){
		current_window.close();
	}

	document.getElementById('maximize').onclick = function(){
		current_window.isMaximized()?current_window.restore():current_window.maximize();
	}
}
