# Product Configurator
### Give customers tools to fully customize products and make them one of a kind

## What We Built

In this example, a site visitor can choose different patterns and colors to design a custom sweater.​

## How We Built It

### The collection we added
 
#### combinedMaterialsImages collection
The combinedMaterialsImages collection has the following fields:

* Title: The name of the pattern or color for the sweater part
* option: The part of the sweater that the pattern or color modifies
* choiceImage: A sample image of the pattern or color
* displayImage: An image of the specific part of the sweater with the specific pattern or color

### Customizing the sweater
On the Sweater page, the visitor can customize a sweater by selecting specific patterns or colors for different parts of the sweater. The page displays a default image of the sweater, as well as the sweater’s title, price, and description from the Products collection. As the visitor makes a selection, the corresponding image from the displayImage field is overlaid on the default image so the visitor can preview their design.

For each customization option, containers hold the elements that let visitors select the sweater part’s pattern or color. These containers collapse or expand as visitors progress through the steps. Visitors can click on the heading text for any step to expand that container and collapse the others.

The pattern and color options for each part are displayed in a repeater and are defined based on the pattern and color options in the combinedMaterialsImages collection. Each pattern or color button is made up of a button and an image. The button implements the hover effect, which displays a black border. The image is connected to a filtered dataset and displays the pattern or color for that customization.

Clicking Add to Cart adds the customized sweater to the visitor’s cart.

### Learn More
https://www.wix.com/corvid/example/Product-Configurator
