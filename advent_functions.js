/*advent calendar --- x'mas card functions*/

// xmasify function
function xmasify() {
	// find target h1 greeting
	var targetH1 = $('body').find('h1');
	var targetImg = $('body').find('img#hat')
	targetH1.toggleClass('visible');
	targetImg.toggleClass('visible');
	var targetBody = $('body').toggleClass('xmasify');
}// end xmasify


// changeKid function triggered by double click
function changeKid() {
	//get target img
	var targetImg = $('body').find('img.kid-image');
	// get id of targetImg
	var targetImgId = targetImg.attr('id');
	// if img id is ella, change to maco, if maco change to mio, else change to ella
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
}// end changeKid


/*event listeners*/

// code that listens to user click, when user clicks, make hat + greeting visible
$('button.xmasify').on('click', xmasify);


// code that listens to double click, when user double clicks, change kid image
$('img').on('click', changeKid);
