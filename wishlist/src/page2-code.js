//-------------Imports-------------//

// Import the wix-data module for working with queries.
import wixData from 'wix-data';
// Import the wix-users module for working with users.
import wixUsers from 'wix-users';

//-------------Global Variables-------------//

// Current product.
let product;
// Current user.
let user = wixUsers.currentUser;

//-------------Page Setup-------------//

$w.onReady(async function () {
	// Get the currently displayed product.
	product = await $w('#productPage1').getProduct();
    // Check if the current product is in the wishlist and act accordingly.
	checkWishlist();
	// Set the action that occurs when the login message is clicked to be the loginMessageClick() function.
	$w('#loginMessage').onClick(loginMessageClick);
});

// Check if the current product is in the wishlist and act accordingly.
async function checkWishlist() {
	// If the current user is logged in:
	if (wixUsers.currentUser.loggedIn) {
		// Query the "products-wishlist" collection to find if the product was already added to the user's wishlist.
		let wishListResult = await wixData.query("products-wishlist")
			.eq("product", product._id)
			.eq("userId", user.id)
			.find();

		// If the product was already added to the user's wishlist:
		if(wishListResult.items.length > 0)
			// Show the "inWishList" image with a fade effect.
			$w('#inWishList').show('fade', {duration: 100});
		// If the product was not yet added to the user's wishlist:
		else
			// Show the "notInWishList" image with a fade effect.
			$w('#notInWishList').show('fade', {duration: 100});	
	}
	// If the current user is not logged in:
	else {
		// Show the "notInWishList" image with a fade effect.
		$w('#notInWishList').show('fade', {duration: 100});
	}
}

//-------------Event Handlers-------------//

// Set the action that occurs when the "inWishList" image is clicked.
export function inWishList_click(event, $w) {
	// If the current user is logged in:
	if (user.loggedIn) 
		// Remove the current product from the wishlist.
		removeFromWishlist();
}

// Set the action that occurs when the "notInWishList" image is clicked.
export function notInWishList_click(event, $w) {
	// If the current user is logged in:
	if (user.loggedIn) 
		// Add the current product to the wishlist.
		addToWishlist()
	// If the current user is not logged in:
	else 
		// Show the login message.
		$w('#loginMessage').show();
}

// Set the action that occurs when the login message is clicked.
async function loginMessageClick() {
	// Set the login options.
	let options = {"mode": "login"};
	// Hide the login message.
	$w('#loginMessage').hide();
	// Prompt the user to login using the options created above.
	await wixUsers.promptLogin(options);
}

//-------------Wishlist Functionality-------------//

// Add the current product to the current user's wishlist and update the page accordingly.
async function addToWishlist() {
	// Create the wishlist item relating the current product to the current user.
	let wishListItem = {
		product: product._id, 
		userId: user.id
	};
    
	// Hide the "notInWishList" image with a fade effect.
	$w('#notInWishList').hide('fade', {duration: 100});
	// Show the "inWishList" image with a fade effect.
	$w('#inWishList').show('fade', {duration: 100});
	// Insert the item created above into the "products-wishlist" collection.
	let result = await wixData.insert("products-wishlist", wishListItem);
}

// Remove the current product to the current user's wishlist and update the page accordingly.
async function removeFromWishlist() {
	// Query the "products-wishlist" collection to find the wishlist item corresponding to the current product and current user.
	let wishListResult = await wixData.query("products-wishlist")
		.eq("product", product._id)
		.eq("userId", user.id)
		.find();

	// If a wishlist item was found:
	if (wishListResult.length > 0) {
		// Show the "notInWishList" image with a fade effect.
		$w('#notInWishList').show('fade', {duration: 100});
		// Hide the "inWishList" image with a fade effect.
		$w('#inWishList').hide('fade', {duration: 100});
		// Remove the wishlist item from the "products-wishlist" collection.
		await wixData.remove("products-wishlist", wishListResult.items[0]._id)
	}
}
