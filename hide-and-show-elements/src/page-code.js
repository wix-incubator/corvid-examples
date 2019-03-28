export function mapBlue_onClick(event) {
	$w('#mapBlue').hide();
	$w('#mapDisabled').show();
	$w('#mapInside').show();
}

export function map_onMouseIn(event) {
	$w('#map').hide();
	$w('#mapBlue').show();
}

export function mapBlue_onMouseOut(event) {
	$w('#map').show();
	$w('#mapBlue').hide();
}

export function mapInside_onMouseIn(event) {
	$w('#mapInside').hide();
	$w('#mapInsideBlue').show();
	$w('#mapInsideHotspot').show();
}

export function mapInsideHotspot_onClick(event) {
	$w('#mapInsideHotspot').hide();
	$w('#mapInsideBlue').hide();
	$w('#map').show();
	$w('#mapDisabled').hide();
}

export function mapInsideHotspot_onMouseOut(event) {
	$w('#mapInsideHotspot').hide();
	$w('#mapInsideBlue').hide();
	$w('#mapInside').show();
}



export function sunglasses_onMouseIn(event) {
	$w('#sunglasses').hide();
	$w('#sunglassesBlue').show();
}

export function sunglassesBlue_onMouseOut(event) {
	$w('#sunglasses').show();
	$w('#sunglassesBlue').hide();
}

export function sunglassesBlue_onClick(event) {
	$w('#sunglassesBlue').hide();
	$w('#sunglassesDisabled').show();
	$w('#sunglasseInside').show();
}

export function sunglasseInside_onMouseIn(event) {
	$w('#sunglasseInside').hide();
	$w('#sunglassesInsideBlue').show();
	$w('#sunglassesInsideHotspot').show();
}

export function sunglassesInsideHotspot_onMouseOut(event) {
	$w('#sunglassesInsideBlue').hide();
	$w('#sunglassesInsideHotspot').hide();
	$w('#sunglasseInside').show();
}

export function sunglassesInsideHotspot_onClick(event) {
	$w('#sunglassesInsideBlue').hide();
	$w('#sunglassesInsideHotspot').hide();
	$w('#sunglasses').show();
	$w('#sunglassesDisabled').hide();
}



export function sketchbook_onMouseIn(event) {
	$w('#sketchbook').hide();
	$w('#sketchbookBlue').show();
}

export function sketchbookBlue_onMouseOut(event) {
	$w('#sketchbookBlue').hide();
	$w('#sketchbook').show();
}

export function sketchbookBlue_onClick(event) {
	$w('#sketchbookBlue').hide();
	$w('#sketchbookDisabled').show();
	$w('#sketchbookInside').show();
}

export function sketchbookInside_onMouseIn(event) {
	$w('#sketchbookInside').hide();
	$w('#sketchbookInsideBlue').show();
	$w('#sketchbookInsideHotspot').show();
}

export function sketchbookInsideHotspot_onMouseOut(event) {
	$w('#sketchbookInsideBlue').hide();
	$w('#sketchbookInsideHotspot').hide();
	$w('#sketchbookInside').show();
}

export function sketchbookInsideHotspot_onClick(event) {
	$w('#sketchbookInsideBlue').hide();
	$w('#sketchbookInsideHotspot').hide();
	$w('#sketchbook').show();
	$w('#sketchbookDisabled').hide();
}



export function matches_onMouseIn(event) {
	$w('#matches').hide();
	$w('#matchesBlue').show();
}

export function matchesBlue_onMouseOut(event) {
	$w('#matchesBlue').hide();
	$w('#matches').show();
}

export function matchesBlue_onClick(event) {
	$w('#matchesBlue').hide();
	$w('#matchesDisabled').show();
	$w('#matchesInside').show();
}

export function matchesInside_onMouseIn(event) {
	$w('#matchesInside').hide();
	$w('#matchesInsideBlue').show();
	$w('#matchesInsideHotspot').show();
}

export function matchesInsideHotspot_onMouseOut(event) {
	$w('#matchesInsideBlue').hide();
	$w('#matchesInsideHotspot').hide();
	$w('#matchesInside').show();
}

export function matchesInsideHotspot_onClick(event) {
	$w('#matchesInsideBlue').hide();
	$w('#matchesInsideHotspot').hide();
	$w('#matches').show();
	$w('#matchesDisabled').hide();
}



const bagImages = {
	gray: "image://v1/467b46_b0679cff4081432da9c0b346c3566227~mv2.png/246_309/Gray bag.png",
	blue: "image://v1/467b46_f73880b7aa01497c96de9a43b8eb4314~mv2.png/246_309/bluebag.png",
	wideStrip: "image://v1/467b46_3cb6b323b84546f7b94856b923040013~mv2.png/246_309/White_widestripes_bag.png",
	degrade: "image://v1/467b46_796efb2f41c94cd3bcccb29a6bb4e71a~mv2.png/246_309/Degrade bag.png",
	lightBlue: "image://v1/467b46_fb5faf47aaff4c8fb68f87032c98d44a~mv2.png/246_309/lightBlue bag.png",
	thinStrip: "image://v1/467b46_1f7850a052ad42118cd472f58cfbfa82~mv2.png/246_309/White_thinstripes_bag.png"
}

const bagColors = ['gray', 'blue', 'wideStrip', 'degrade', 'lightBlue', 'thinStrip'];

function showBag(bagColor) {
	$w('#bagImage').src = bagImages[bagColor];
	// hide the selection buttons for other colors
	bagColors
		.filter(_ => _ !== bagColor)
		.forEach(_ => $w(`#${_}Selected`).hide());
	$w(`#${bagColor}Selected`).show();		
}

export function thinStrip_onClick(event) {
	showBag('thinStrip');
}

export function wideStrip_onClick(event) {
	showBag('wideStrip');
}

export function degrade_onClick(event) {
	showBag('degrade');
}

export function lightBlue_onClick(event) {
	showBag('lightBlue');
}

export function blue_onClick(event) {
	showBag('blue');
}

export function gray_onClick(event) {
	showBag('gray');
}
