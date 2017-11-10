
var clockDiv = document.getElementById('clock');

function displayTime(){
	
	
	var currentTIme = new Date();
	var hr = currentTIme.getHours();
	var min = currentTIme.getMinutes();
	var sec = currentTIme.getSeconds();
	
	if( sec < 10 ){
		
	sec = "0"+sec;	
	}
	
	if( hr > 12){
	hr = hr- 12;	
	}

	clockDiv.innerHTML = hr+":"+min+":"+sec;
	
}
displayTime();

var backgroundColor = document.querySelector("body");
backgroundColor.style.backgroundColor = "#80d4ea";

var interval = setInterval(displayTime,1000);

clockDiv.style.cssText = "font-size:100px; color: white; text-align:center;right:auto;left:auto;";