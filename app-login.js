(function() {
	if (localStorage["ngchat_author"]) {
		document.getElementById("loginForm").value = localStorage["ngchat_author"];
	}

	document.getElementById("loginForm").addEventListener("focus", function() {
		this.className = "form-control";
	}, false);

	var inputBtn = document.getElementById("loginBtn");
	inputBtn.addEventListener("click", function() {
		if (document.getElementById("loginForm").value != "") {
			localStorage["ngchat_author"] = sessionStorage["ngchat_author"] = document.getElementById("loginForm").value;
			window.location = "index.html";
		} else {
			document.getElementById("loginForm").className = "form-control error";
		}
	}, false);
})();