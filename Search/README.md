# Search
### Let visitors quickly search your site content

## What We Built
In this example, site visitors can search and filter a list of countries to quickly find travel articles they want to read. They can search for keywords in the articles’ titles, and filter the countries according to continent.


## How We Built It​
### Collections
We added two database collections to our site:

Articles collection: Contains articles about different countries to visit. Each item in the collection includes a country, continent, image, article title, and article content.

Continents collection: Lists the continents of all destinations.

 
### Page Elements
On the ARTICLES page, we added the following page elements:

#### Repeater: 
To display the country, image, and title of each destination article.

#### Dataset: 
The Articles dataset connects the repeater to the Articles collection.

#### Button: 
A “Read More” button in the repeater. Visitors choose a country they want to know more about and click the button to read the article on the Articles dynamic item page.

 

To help visitors quickly find the articles they want, we also added two user input elements:

#### Search bar: 
Visitors search for specific destinations by typing text in a text input element. Only destinations with #### article titles that match the search value will be displayed.

#### Dropdown menu: 
Visitors filter the destinations according to continent by selecting a continent from a list.

## Code
On the ARTICLES page, we used code to do the following:

Set up the dropdown: When the page loads, map the list of continents in the Continents collection into the dropdown list. Also add an “All Continents” option.

Filter using the search bar: When a site visitor types a key in the search bar, first add a delay of 500 ms using setTimeout(), and then filter the dataset contents so that only destinations with titles containing the input text are loaded into the repeater. Also filter the destinations according to the last continent selected from the dropdown list.
 

We delay the filter function for two reasons:

It takes time until a keypress value is added to the search value. If we don’t delay, the search value will not include the last keypress.

When we type fast we see the list of destinations flicker. This is because the repeater loads again for every key visitors press. The delay lets us wait until the visitor is finished typing.
 

Filter using the continents dropdown: When a site visitor selects a continent in the dropdown list, filter the dataset so that only destinations inside the selected continent are loaded into the repeater. Also filter the destinations according to the the last search value entered in the search bar.

 
### Next Steps
Open this example in the Editor to work with the template.

Publish the site.

Learn how to work with examples in Wix Code.

### Learn More
Video: How to Create a Search for Your Database
