

//navbar close and open
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".content").style = "margin-left: 250px; margin-right:auto;" ;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	document.getElementById("headingImg").style.marginLeft="250px";
    document.getElementById("hamburgerIcon").style.marginLeft="250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".content").style.marginLeft= "auto";
    document.body.style.backgroundColor = "white";
	document.getElementById("headingImg").style.marginLeft="auto";
    document.getElementById("hamburgerIcon").style.marginLeft="0";
}

