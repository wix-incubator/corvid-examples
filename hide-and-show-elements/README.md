# Hide and Show Elements
### Hide and show elements in response to user interactions

This example demonstrates how to hide and show different page elements depending on how a user interacts with the page.

Hiding an element removes the element from the page, but retains the space where the element used to be. Elements positioned below the hidden element will retain their location and elements positioned behind the hidden element are shown.

In the top section, we hide and show different versions of the same image. Each of the four items that can be added to the backpack, have three images overlaid on top of each other outside the backpack and two images with a hotspot inside the backpack. The images outside the backpack are regular images, an image with the Add button on it and a disabled version of the image. Inside the backpack is a box element that serves as a hotspot, a regular image and an image with an X button on it. We use the onMouseIn, onMouseOut and onClick event handlers of the images and the hotspots to hide and show the appropriate images for each interaction.


In the bottom section, we take a different approach. We have seven different images of the backpack. One image is the plain backpack. The other six images of the backpack are with the different patterns. Instead of overlaying all seven images in the Editor and then hiding and showing them as the user chooses a pattern, we have just one image element. When a user clicks on one of the patterns, we change the backpack that is shown in the image element using the element’s src property. 

### Learn More:
https://www.wix.com/code/home/example/Hide-and-Show-Elements
