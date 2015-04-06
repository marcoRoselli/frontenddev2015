
(function() {
	(function getData() {
		if (window.XMLHttpRequest) {
			var xhr = new XMLHttpRequest();
		} else {
			var xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xhr.onreadystatechange = function() {
			if (xhr.status = "200" && xhr.readyState == "4") {
				params = JSON.parse(xhr.response);
				document.addEventListener('DOMContentLoaded',fillQuestions(params),false);
			}
		}
		xhr.open('get','responseHandler.php?task=displayUnit','true');
		xhr.send();
	})();
	
	function fillQuestions(params){
		var question = document.getElementsByClassName("question");
		var options = document.getElementsByClassName("selection");
		question[0].innerHTML = params.question;
		for (var z = 0; z < options.length; z++) {
			var name = options[z].attributes.name.value;
			options[name].innerHTML = params[name];
			options[z].addEventListener('touchstart',getSelection,false);
			options[z].addEventListener('click',getSelection,false);
			
		}
	}

	
	function getSelection() {
		var options = document.getElementsByClassName("selection");
		//remove click event listener to avoid multiple votes 
		for (var k = 0; k < options.length; k++) {	
			options[k].removeEventListener('click',getSelection,false);	
		}
		selectedValue = this.attributes.val.value;
		//send xhr with selected value
		if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
		} else {
		var xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xhr.onreadystatechange = function () {
			if (xhr.status == "200" && xhr.readyState == "4") {
				displayResult(JSON.parse(xhr.response));
			}
		}
		xhr.open('get','responseHandler.php?task=select&choice='+selectedValue,'true');
		xhr.send();
		
		function displayResult(result) {
			if (result[0] == true) {
				result = JSON.parse(result[1]);
				document.getElementById("optionContainer").innerHTML = "<div class='question'>Thank you for your opinion</h5>";
				var resultArr = result.results.distribution;
				for (var j = 0; j < resultArr.length; j++) {
					document.getElementById("optionContainer").innerHTML +="<div class='selection-post'>"+ params['selection'+j]+ ": "+ resultArr[j]+"</div>";
				}
			} else {
				document.getElementById("optionContainer").innerHTML = "<div class='question'>Apologies, your vote couldn't be registered</div>";
				document.getElementById("optionContainer").innerHTML += "<div class='selection-post'>Error: "+result[1]+"</div>";
			}
		}
	}
})();		
	



