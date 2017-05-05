(function() {
	if (window.location.href.indexOf("login.html") == -1 && !sessionStorage["ngchat_author"]) {
		window.location = "login.html";
	}
})();