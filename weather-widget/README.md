# Create a Weather Widget
### Fetch data from a 3rd party service to create a widget

## What We Built
In this example, we fetch data from a 3rd party weather service to create our own customized weather widget.

## How We Built It
We used OpenWeatherMap as our 3rd party service. We registered for an API key on their site, which allows us to use their services.

### Page Elements
In our site we added the following page elements:

Dropdown list of cities: Site visitors select a city to view current weather data. The dropdown choice “values” are defined as city names listed in the 3rd party service site. We added an event handler in the dropdown element’s Properties panel that runs when a site visitor selects a city.

#### Background image: This image changes depending on whether it’s sunny or cloudy in the selected city.

Two text elements: These display the weather description and temperature in the selected city.

### Code
Then we added code to do the following:

Import the fetch function: We imported the fetch function used to get the weather data JSON object from the 3rd party site.

Define variables: In the event handler that runs when a new city is selected in the dropdown, we defined variables to store the following:

The value of the selected city in the dropdown

The API key we received from the 3rd party service

Sources of the sunny and cloudy images

Run the fetch request: How did we know exactly how to write the fetch URL? We looked at the API reference and examples on the 3rd party service’s site. Our URL includes the following:

A current weather query for the selected city

The API key that allows us access

An optional parameter requesting the weather data in metric units (Celsius).

 
Note: We used temperate literals in the fetch URL so that we could include variables in the path.
 

4. Assign weather data to text elements: We extracted the weather description and temperature from the JSON object and assigned them to the text elements.

5. We checked if the description was “clear sky” and the temperature was 10 degrees or higher. If so, we displayed the sunny image. If not, we displayed the default cloudy image.

### Learn More:
https://www.wix.com/code/home/example/Create-a-Weather-Widget
