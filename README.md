# Assessment Report

serve with Spring framework by running `./gradlew bootRun` in the root directory

static files are in `src/main/webapp`. I have hardcoded values in the .js files, so even without a server connection the pages will work.

## Features:
First page has a Google Map with location of recent incidents.
When hovering over a marker, a tooltip will display the location of the incident.
Clicking a marker will redirect user to the second page with the proper query parameters in the URL.

Based on query parameters, the graph on the second page will display the number of accidents that have occured within a certain distance of that specific location. I have assumed the data is grouped by day (as opposed to something more specific, like hour).
Below the graph, a table of accidents within a month is displayed.

## More Information:
I hardcoded fake data for the first page, and did GET requests based on query parameters for the second page.
I decided to modify the existing index.html, and placed a Google Map div in the main container area.

details.html is a modified version of charts.html.

Other than the existing .js files, I have written my javascript in  js/custom.js and js/custom-details.js.
I also use external libraries moment.js for datetime manipulation, and jquery.flot.axislabels.js for flot axis labelling.

Regarding organization/framework/backend I was thinking about using NodeJS, because I was somewhat familliar with NodeJS + React.
However React and JQuery both manipulates the DOM, and the requirements stated JQuery, so in this scenario where I already have some html to work with, plus due to the scope of the assessment, it makes more sense to work with the existing html.

I looked up Spring framework as a backend API for GET requests. I was thinking of a way to get map data, most likely through JSON. I managed to set up a simple Spring RESTful service and could get JSON responses. I used it for flot graphing, and displaying the table in the second page, but I had trouble getting Google Maps to display the data properly. I wasn't sure where the exact problem was, as both Spring framework and the Google Maps API are new to me. Hence, I fell back to fake data instead.

The hardcoded values are still in the html, so if the GET request fails, there is still data in the HTML to fall back to. So, index.html can be just opened in the browser and it will work.

Line 32 in custom.js is where I try to get data from the server to populate Google Maps. I have 4 data points on the server, and 3 hardcoded. If line 34 is uncommented, JQuery will fetch data from the server, but Google maps will only have the last marker even though the coords array is overwritten to have 4 values.

## Possible improvements:
**Page #1:**
* Fix ajax display of markers
* Allow user to change time window
* Better description of the locations. For the hardcoded locations, I clicked some places on Google Maps and copied the description that was corresponding to the exact location. Hence, "PIE" is probably not specific enough.
* Display more info on each marker's mouseover tooltip, or have a div below the map displaying more info. For example: vehicles involved

**Page #2:**

I am not familliar with jquery flot, so the look definitely can be improved.

* X-axis should not scale dynamically (should start from exactly 30 days ago and end at current date/time)
* Option for X-axis to be customized to display by week instead of day
* Cofigure proximity radius, or type. For example, The graph can show the history of accidents happening within 1km, or on the same road, or within x connecting roads (have to leverage Maps API further).
* The fake data for the second page does not match.
* Allow the rows in the table to be clicked, which then shows a Google Map to the user displaying the exact location of that specific incident.

