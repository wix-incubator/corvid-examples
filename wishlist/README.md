# Wishlist
Let customers add items to their wishlist and save to purchase later

## What We Built
In this example, a site member can add products in a Wix Store to a wishlist. A My Wishlist page displays the member’s wishlist.

## How We Built It

#### We created the products-wishlist​ collection with the following fields:
* User Id: The ID of the member who is adding an item to their wishlist
* Product: A reference field that points to the product the member added to their wishlist

The **products-wishlist** collection maintains all the wishlist information for all the site members. Each item in the collection associates a member's ID with a product they selected to add to their wishlist. With that information in the collection, we can then check the collection for a member's ID and the results represent the member's wishlist.

#### Adding or removing a product in a wishlist
When the Product Page loads, it checks to see if the current product is associated with the member in the products-wishlist collection and displays the appropriate icon.

Members can click the icon to add the current product to their wishlist or remove it.

#### Viewing a wishlist
We added a My Wishlist page to the Member Pages group. When it loads, it checks the products-wishlist collection for all the products associated with the current member and displays them in the repeater. It also has a group of elements that are displayed if the member's wishlist is empty, prompting them to go shopping.

### Next Steps
1. Open this example in the Editor to work with the template.
2. Publish the site and refresh your browser so the Stores collections appear in the Database.
3. Learn how to work with examples in Wix Code.

### Learn More
https://www.wix.com/code/home/example/Wishlist
