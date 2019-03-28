// For full API documentation, including code examples, visit http://wix.to/94BuAAs

import wixWindow from 'wix-window';

//-------------Global Variables-------------//

// Number of parts that can be customized.
const NUMBER_OF_CHOICES = 4;
// Hard coded product ID from the Products collection.
const productId = "ad8e5eee-5939-d0aa-6094-e620986543fe";
// Options that have been selected.
let selectedOptions = {};

//-------------Page Setup-------------//

// Start with clean slate when page loads.
$w.onReady(function () {
	// Clear the customizations by calling the clearSelection() function.
	clearSelection();
});

// Set the action that occurs when a user clicks the refresh button.
export function refreshButton_click(event, $w) {
	// Clear the customizations by calling the clearSelection() function.
	clearSelection();
}

// Clear the customization images by calling the clearSelection() function.
function clearSelection() {
	// Clear out selected options object.
	selectedOptions = {};
	// Hide and clear all the customization images.
	$w('#bodyImg').hide();
	$w("#sleevesImg").hide();
	$w('#necklineImg').hide();
	$w("#pocketImg").hide();
	$w("#bodyImg").src = 'https://';
	$w("#sleevesImg").src = 'https://';
	$w("#pocketImg").src = 'https://';
	$w("#necklineImg").src = 'https://';
	// Disable the "Add to Cart" button.
	$w("#addToCartButton").disable();
}

//-------------Repeaters Setup-------------//

// Set up each item in the body selection repeater as it is loaded.
export function bodySelectionRepeater_itemReady($w, itemData, index) {
	// Set the action that occurs when a user clicks a choice for the body option.
	$w('#selectBodyButton').onClick(() => {
		// Select the choice using the selectChoiceForOption() function.
		selectChoiceForOption($w, 'body', itemData);
		
		//on mobile, collapse the repeater and expand the next one
		if (wixWindow.formFactor === 'Mobile') {
			toggleFold(2);
		}
	});
}

// Set up each item in the sleeves selection repeater as it is loaded.
export function sleevesSelectionRepeater_itemReady($w, itemData, index) {
	// Set the action that occurs when a user clicks a choice for the sleeves option.
	$w('#selectSleevesButton').onClick(() => {
		// Select the choice using the selectChoiceForOption() function.
		selectChoiceForOption($w, 'sleeves', itemData);

		//on mobile, collapse the repeater and expand the next one
		if (wixWindow.formFactor === 'Mobile') {
			toggleFold(3);
		}
	});
}

// Set up each item in the pocket selection repeater as it is loaded.
export function pocketSelectionRepeater_itemReady($w, itemData, index) {
	// Set the action that occurs when a user clicks a choice for the pocket option.
	$w('#selectPocketButton').onClick(() => {
		// Select the choice using the selectChoiceForOption() function.
		selectChoiceForOption($w, 'pocket', itemData);

		//on mobile, collapse the repeater and expand the next one
		if (wixWindow.formFactor === 'Mobile') {
			toggleFold(4);
		}
	});
}

// Set up each item in the neckline selection repeater as it is loaded.
export function necklineSelectionRepeater_itemReady($w, itemData, index) {
	// Set the action that occurs when a user clicks a choice for the neckline option.
	$w('#selectNecklineButton').onClick(() => {
		// Select the choice using the selectChoiceForOption() function.
		selectChoiceForOption($w, 'neckline', itemData);

		//on mobile, make all repeaters collapsed
		if (wixWindow.formFactor === 'Mobile') {
			toggleFold(4);
		}
	});
}

// Select a specific choice for a specific customization option.
function selectChoiceForOption($w, option, choiceData) {
	// Set the selected choice in the selectedOptions global object.
	selectedOptions[capitalizeFirstLetter(option)] = choiceData.title;
	// Change the image for the selected option to the selected choice's image.
	$w(`#${option}Img`).src = choiceData.displayImage;
	// Show the option image.
	$w(`#${option}Img`).show();
	// If a choice has been selected for all of the options:
	if (Object.keys(selectedOptions).length === NUMBER_OF_CHOICES) {
		//Enable the "Add to Cart" button.
		$w('#addToCartButton').enable();
	}
}

// Utility function for capitalizing the first letter of a string.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//-------------Expand/Collapse Sections-------------//

// Set the action that occurs when a user clicks the first option header.
export function option1Button_click(event, $w) {
	// Expand and collapse the appropriate sections by calling the toggleFold() function.
	toggleFold(1);
}

// Set the action that occurs when a user clicks the second option header.
export function option2Button_click(event, $w) {
	// Expand and collapse the appropriate sections by calling the toggleFold() function.
	toggleFold(2);
}

// Set the action that occurs when a user clicks the third option header.
export function option3Button_click(event, $w) {
	// Expand and collapse the appropriate sections by calling the toggleFold() function.
	toggleFold(3);
}

// Set the action that occurs when a user clicks the fourth option header.
export function option4Button_click(event, $w) {
	// Expand and collapse the appropriate sections by calling the toggleFold() function.
	toggleFold(4);
}

// Expand the specified section if it is collapsed. Collapse the specified section if it is expanded.
// If expanding, collapse all other sections.
function toggleFold(index) {
	// Set variables for the elements that correspond to specified index's section.  
	let $fold = $w(`#option${index}Box`);
	let $arrowDown = $w(`#arrowDown${index}`);
	let $arrowUp = $w(`#arrowUp${index}`);

	// If the specified section is currently collapsed:
	if ($fold.collapsed) {
		// Set its elements to the expanded state.
		$fold.expand();
		$arrowDown.show();
		$arrowUp.hide();
	// If the specified section is currently expanded:
	} else {
		// Set its elements to the collapsed state.
		$fold.collapse();
		$arrowDown.hide();
		$arrowUp.show();
	}

	// For each section index:
	for (let i = 1; i <= NUMBER_OF_CHOICES; i++) {
		// If it is not the specified index:
		if (i !== index) {
			// Set its elements to the collapsed state.
			$w(`#option${i}Box`).collapse();
			$w(`#arrowDown${i}`).hide();
			$w(`#arrowUp${i}`).show();
		}
	}
}

//-------------Cart Button-------------//

export function addToCartButton_click(event, $w) {
	$w('#shoppingCartIcon1').addToCart(productId, 1, {choices: selectedOptions});
}
