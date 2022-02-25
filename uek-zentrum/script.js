goToTopButton = document.getElementById("goToTopButton");
window.onscroll = function () { scrollFunction() };

var selectedSliderImage = 1;

function navCloseOpen() {
	var fadeOverlay = document.getElementById("fadeOverlay");
	var nav = document.getElementById("nav");
	var navButton = document.getElementById("navButton");
	if (!nav.classList.contains("navopen")) {
		nav.classList.add("navopen");
		navButton.src = "images/closeButton.png"
		fadeOverlay.classList.add("activeOverlay");
	}
	else {
		nav.classList.remove("navopen");
		navButton.src = "images/navButton.png"
		fadeOverlay.classList.remove("activeOverlay");
	}
	return;
}
function contactCloseOpen() {
	var contactButton = document.getElementById("contactOpenLink");
	var contact = document.getElementById("contact");
	if (contact.style.visibility == "hidden") {
		contact.style.visibility = "visible";
		contactButton.textContent = "Kontakt Schliessen";
	}
	else {
		contact.style.visibility = "hidden";
		contactButton.textContent = "Kontakt";
	}
	return;
}
function scrollFunction() {
	if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)) {
		goToTopButton.style.display = "block";
	} else {
		goToTopButton.style.display = "none";
	}
	if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) && (document.body.scrollHeight - window.innerHeight - window.scrollY < 1)) {
		goToTopButton.style.display = "block";
		goToTopButton.style.bottom = "95px";
	}
	else {
		goToTopButton.style.bottom = "50px";
	}

}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function sliderBarUpdate() {
	var r1Bar = document.getElementById("r1Bar");
	var r2Bar = document.getElementById("r2Bar");
	var r3Bar = document.getElementById("r3Bar");
	var r4Bar = document.getElementById("r4Bar");
	var r5Bar = document.getElementById("r5Bar");
	r1Bar.classList.remove("selectedSliderBar");
	r2Bar.classList.remove("selectedSliderBar");
	r3Bar.classList.remove("selectedSliderBar");
	r4Bar.classList.remove("selectedSliderBar");
	r5Bar.classList.remove("selectedSliderBar");
	if (document.getElementById("r1").checked) {
		r1Bar.classList.add("selectedSliderBar");
		selectedSliderImage = 1;
	}
	if (document.getElementById("r2").checked) {
		r2Bar.classList.add("selectedSliderBar");
		selectedSliderImage = 2;
	}
	if (document.getElementById("r3").checked) {
		r3Bar.classList.add("selectedSliderBar");
		selectedSliderImage = 3;
	}
	if (document.getElementById("r4").checked) {
		r4Bar.classList.add("selectedSliderBar");
		selectedSliderImage = 4;
	}
	if (document.getElementById("r5").checked) {
		r5Bar.classList.add("selectedSliderBar");
		selectedSliderImage = 5;
	}
}

function sliderPictureBack() {
	if (selectedSliderImage != 1) {
		selectedSliderImage -= 1;
	}
	checkSelectedSlider();
}

function sliderPictureForward() {
	if (selectedSliderImage != 5) {
		selectedSliderImage += 1;
	}
	checkSelectedSlider();
}

function checkSelectedSlider() {
	document.getElementById("r1").checked = false;
	document.getElementById("r2").checked = false;
	document.getElementById("r3").checked = false;
	document.getElementById("r4").checked = false;
	document.getElementById("r5").checked = false;
	switch (selectedSliderImage) {
		case 1:
			document.getElementById("r1").checked = true;
			break;
		case 2:
			document.getElementById("r2").checked = true;
			break;
		case 3:
			document.getElementById("r3").checked = true;
			break;
		case 4:
			document.getElementById("r4").checked = true;
			break;
		case 5:
			document.getElementById("r5").checked = true;
			break;
		default:
			break;
		
	}
	sliderBarUpdate();
}