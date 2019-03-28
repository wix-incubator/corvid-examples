// For full API documentation, including code examples, visit http://wix.to/94BuAAs

//-------------Imports-------------//

// Import the wix-data module for working with queries.
import wixData from 'wix-data';
// Import the wix-users module for working with users.
import wixUsers from 'wix-users';
// Import the wix-location module for navigating to pages.
import wixLocation from 'wix-location';

//-------------Page Setup-------------//

$w.onReady(async function () {
	// Get the current user.
	let user = wixUsers.currentUser;
	
	// If the current user is logged in:
	if(user.loggedIn)
		// Load the user's wishlist using the loadWishlist() function.
		return loadWishlist();
	
	// If the current user is not logged in:
	// Collapse the wishlist.
	$w('#wishlist').collapse();
	// Expand the empty whishlist.
	$w('#emptyWishlist').expand();
});

// Load and display the current user's wishlist.
async function loadWishlist(){
	// Get the current user.
	let user = wixUsers.currentUser;
	// Query the "products-wishlist" collection for all wishlist items belonging to the current user.
	let wishlistResult = await wixData.query("products-wishlist")
			.eq("userId", user.id)
			.include('product')
	  		.find()
	
	// If any wishlist items were found:
	if (wishlistResult.length > 0) {
		// Expand the wishlist.
	  	$w("#wishlist").expand();
		// Collapse the empty wishlist.
		$w("#emptyWishlist").collapse();
		// Set the wishlist repeater's data.
	  	$w("#wishlist").data = wishlistResult.items;
		// Set the action that occurs when the wishlist repeater items are loaded to the myItemReady() function. 
		$w('#wishlist').onItemReady(myItemReady);
	} 
	// If no wishlist items were found:
	else {
		// Collapse the wishlist.
	  	$w("#wishlist").collapse();
		// Expand the empty wishlist.
	  	$w("#emptyWishlist").expand();
	}	
}

// Set up the wishlist repeater items when the repeater's data is loaded.
function myItemReady($w, wishlistItem){
	// Get the wishlist product.
	let product = wishlistItem.product;
	// Set the repeater's elements using the item data.
	$w('#productImage').src = product.mainMedia;
	$w('#name').text = product.name;
	$w('#price').text = product.formattedPrice;
	// Set the action that occurs when the product image is clicked.
	$w('#productImage').onClick(() => {
		// Navigate to the wishlist item's product page.
		wixLocation.to(product.productPageUrl);
	});
	// Set the action that occurs when the remove item image is clicked to the removeItem() function.
	$w('#removeItem').onClick(removeItem(wishlistItem._id));
}

// Remove an item from the user's wishlist.
function removeItem(id) {
	return async function() {
		// Remove the item with the specified ID from the "products-wishlist" collection.
		await wixData.remove('products-wishlist', id);
		// Reload the wishlist to reflect the removed item.
		loadWishlist();
	}
}
