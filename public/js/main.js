var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// david asuncion
// how do I get this to function within the actual website??
function ServicesOffered(modality) {
	this.modality = modality;
}

var services = [
	new ServicesOffered("swedish"),
	new ServicesOffered("deep"),
	new ServicesOffered("ashiatsu"),
	new ServicesOffered("prenatal")
];

function sortServices(comp, array) {
	var newArray = array.slice(0);
	var n = newArray.length;

	for (var i=0; i<n-1; i++) {
		for (var j=0; j<n-i-1; j++) {
			if (comp(newArray[j], newArray[j+1])) {
				var temp = newArray[j];
				newArray[j] = newArray[j+1];
				newArray[j+1] = temp;
			}
		}
	}	
}

function sortByCase(service1, service2) {
	if (service1.modality.toLowerCase() >= services2.modality.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

console.log("Our services offered are:");
var sortByMod = sortServices(sortByCase, ServicesOffered);
sortByMod.forEach(function(ele, index, arr) {
		ele.logMe(false);
});
