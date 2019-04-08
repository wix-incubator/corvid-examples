let showing = 'outside';

export function theButton_onClick(event) {
	if (showing === 'outside') {
		$w('#theImage').src = "image://v1/4bc52e_7b9ae0e962874dea9c4ff9271698560b~mv2.png/638_400/Example Box 396 H copy 42211 - inside.png";
		$w('#theButton').label = "Look Outside";
		$w('#searchVLine').hide();
		showing = 'inside';
	}
	else {
		$w('#theImage').src = "image://v1/4bc52e_8bc13c055970444ea1bd57d7cff077e7~mv2.png/638_400/Example Box 396 H copy 42 - outside.png";
		$w('#theButton').label = "Look Inside";
		$w('#searchVLine').show();
		showing = 'outside';
	}

}
