# Chart
### Use JavaScript post messages to communicate with the HTML component

This example demonstrates how to use the HTML component to embed a chart on a page. This is just one of the many things you can embed in your site using the HTML component.

Here we embed a [chart.js](https://www.chartjs.org/) chart. The HTML code for the chart is entered into the HTML Component using its Edit Code button. The page and the HTML component communicate with each other using the postMessage and onMessage functions.

When the page loads and each time a year is selected using the dropdown element, the page sends a message to the HTML component using the postMessage function. The message contains the values to display in the chart. The HTML component receives the message using its onMessage function and updates the chart accordingly.

When a user clicks a bar on the chart, the HTML component sends a message to the page using its postMessage function. The message contains data about the item that was clicked. The page receives the message using the onMessage function and displays its contents to users using the text element below the chart.

The chart is based on chartjs.org. You can find their repository and license on GitHub.

### Learn More:
https://www.wix.com/code/home/example/Chart
