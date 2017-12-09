/*advent calendar --- x'mas card functions*/

// xmasify function
function xmasify() {

}


// changeKid function triggered by double click
function changeKid() {
	console.log("change kid active with double click")
	//get target img
	var targetImg = $('body').find('img.kid-image');
	// get id of targetImg
	var targetImgId = targetImg.attr('id');
	alert(targetImgId);
	if (targetImgId === "ella") {
		targetImg.attr('src', 'images/maco_advent_image.jpg');
		targetImg.attr('id', 'maco');
	} else if (targetImgId === 'maco') {
		targetImg.attr('src', 'images/mio_advent_image.jpg');
		targetImg.attr('id', 'mio');
	} else {
		targetImg.attr('src', 'images/ella_advent_image.jpg');
		targetImg.attr('id', 'ella');
	}
}


/*event listeners*/

// code that listens to user click, when user clicks, make hat + greeting visible
$('body').on('click', xmasify);


// code that listens to double click, when user double clicks, change kid image
$('body').on('dblclick', changeKid);
