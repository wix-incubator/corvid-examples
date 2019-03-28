# Text Index
### Create a custom index for collection content
This example demonstrates how to use a text element, instead of a table or gallery, to create a customized index.

The List Index page shows a list of recipes that is read from the recipes collection using the [https://www.wix.com/code/reference/wix-dataset.html][Dataset API]. We use the dataset onReady function to register an event handler that retrieves the first 50 items, formats them for display, links to their corresponding dynamic item pages and places them in a single text element.

A text element can accept formatted text using its html property. We use standard HTML formatting on the text, parsed from the dataset, to format the text and give each item the appearance of being in a separate section. For example, the lines between sections are created using a carefully sized string of x’s contained within HTML span tags where the background and foreground colors are set to match the background color of the page.  

Using a similar approach, you can use a text element to create your own customized index.

The Recipes (Title) dynamic page shows a single recipe based on the published URL of the page. The dynamic page URL is set to select the recipe to display based on its title. The URL has the following pattern:

``http://www.../  recipes/{ title }``

The  ``{ title }``  is a value from the Title field in the recipes collection.

Page elements are connected to the Recipes Item dataset to show the recipe information from the recipes collection. You can open this collection from the Database section of the Site Structure sidebar. The Foodista.com link is created using the html property of a text element. We get the link to the recipe shown on the page from the dynamic page’s dataset in the dataset’s onReady event handler.

The recipes in this example are from Foodista.com - The Cooking Encyclopedia Everyone Can Edit.

For more information go to: https://www.wix.com/code/home/example/Text-Index
