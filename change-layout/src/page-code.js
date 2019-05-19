export function moveToGalleryButton_onClick(event) {
	$w('#slideshowWireframe').changeSlide(1);
}

export function moveToListButton_onClick(event) {
	$w('#slideshowWireframe').changeSlide(0);
}

export function buttonList_onClick(event) {
	showList();
}

export function buttonGallery_onClick(event) {
	showGallery();
}
function showGallery() {
	$w('#slideshowTabs').changeSlide(1);
	$w('#buttonList').enable();
	$w('#buttonGallery').disable();	
	$w('#shapeGalleryActive').show();
	$w('#shapeGalleryInactive').hide();
	$w('#shapeListActive').hide();
	$w('#shapeListInactive').show();
}


function showList() {
	$w('#slideshowTabs').changeSlide(0);
	$w('#buttonList').disable();
	$w('#buttonGallery').enable();	
	$w('#shapeGalleryActive').hide();
	$w('#shapeGalleryInactive').show();
	$w('#shapeListActive').show();
	$w('#shapeListInactive').hide();
}
