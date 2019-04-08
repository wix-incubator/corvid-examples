
function toggleFold(index) {
	let $fold = $w('#fold' + index);
	let $arrowDown = $w('#arrowDown' + index);
	let $arrowRight = $w('#arrowRight' + index);
	// toggle the fold at the index
	if ($fold.collapsed) {
		$fold.expand();
		$arrowDown.show();
		$arrowRight.hide();
	}
	else {
		$fold.collapse();
		$arrowDown.hide();
		$arrowRight.show();
	}
	// collapse the other folds
	[1,2,3,4]
		.filter(idx => idx !== index)
		.forEach(idx => {
			$w('#fold' + idx).collapse();
			$w('#arrowDown' + idx).hide();
			$w('#arrowRight' + idx).show();
		})
}

export function headerBox1_onClick(event) {
	toggleFold(1);
}

export function headerBox2_onClick(event) {
	toggleFold(2);
}

export function headerBox3_onClick(event) {
	toggleFold(3);
}

export function headerBox4_onClick(event) {
	toggleFold(4);
}
