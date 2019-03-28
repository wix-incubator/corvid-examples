Table Index
Create a table index to display collection content
CONTENT EXAMPLES
https://www.wix.com/code-examples/v2-content-table

Open In Editor
NEXT EXAMPLE

Turn on Developer Tools in the Code menu.

This example demonstrates how to use a table as an index for collection content.

The Table Index page uses a Table element to show the photo and Title fields for recipes in the recipes collection. The table is connected to the Recipes dataset.

Clicking on a recipe title in the table takes you to the dynamic item page for that recipe.

The Recipes (Title) dynamic page shows a single recipe based on the published URL of the page. The dynamic page URL is set to select the recipe to display based on its title. The URL has the following pattern:

http://www.../  recipes/{ title }

The { title } is a value from the Title field in the Recipes collection.

Page elements are connected to the Recipes Item dataset to show the recipe information from the recipes collection. You can open this collection from the Database section of the Site Structure sidebar. The Foodista.com link is created using the html property of a text element. We get the link to the recipe shown on the page from the dynamic page’s dataset in the dataset’s onReady event handler.

The recipes in this example are from Foodista.com - The Cooking Encyclopedia Everyone Can Edit.

For more information: https://www.wix.com/code/home/example/Table-Index
