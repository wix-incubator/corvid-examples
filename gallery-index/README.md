This example demonstrates how to use a gallery as an index for collection content.

The Gallery Index page shows recipes from the recipes collection using a Gallery element that is connected to the Recipes dataset.

Clicking on a recipe in the gallery takes you to the dynamic item page for that recipe.

The Recipes (Title) dynamic page shows a single recipe based on the published URL of the page. The dynamic page URL is set to select the recipe to display based on its title. The URL has the following pattern:

``
http://www.../  recipes/{ title }
``

The ``{ title }`` is a value from the Title field in the recipes collection.

Page elements are connected to the Recipes Item dataset to show the recipe information from the recipes collection. You can open this collection from the Database section of the Site Structure sidebar. The Foodista.com link is created using the html property of a text element. We get the link to the recipe shown on the page from the dynamic page’s dataset in the dataset’s onReady event handler.

The recipes in this example are from Foodista.com - The Cooking Encyclopedia Everyone Can Edit.
