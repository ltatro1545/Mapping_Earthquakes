# Mapping Earthquakes with Leaflet
Module 13 Challenge for UCF Data and Visualization Bootcamp

## Purpose
The objective of this assignment was to make calls to links possessing GeoJSON data then apply that information to maps using Leaflet and D3. The maps were generated in MapBox through Leaflet. After completing the module, the code was capable of mapping every earthquake in the last 7 days while providing location and magnitude information when clicked on. It also possessed the ability to switch between a street layer and a satellite layer, as well as a legend for magnitude colors.

From this starting point, the task was to add an additional layer (I used the dark view), call another JSON file containing only earthquakes with magnitudes of 4.5 or higher, and then add lines for tectonic plates. All of these features became options and are able to be toggled within the layers selector in the top right of the map.

### Resources
  - 7-Day Earthquake Data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
  - Tectonic Plate Lines: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json
  - Major Earthquakes Data (Magnitude 4.5 or higher): https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson


## Results
Below, are two images demonstrating some of the varying options one can toggle when utilizing the map.

![earthquakes_tect](https://user-images.githubusercontent.com/92493572/151245048-d89cce35-c1cb-4584-b509-86747bf8e8d7.png)

![earthquakes_maj_dark](https://user-images.githubusercontent.com/92493572/151245059-f4ee050a-5d7f-4cd6-b87b-c0cd1d57fac7.png)

## Discussion
This map could benefit from additional modification such as a legend to hold major earthquakes magnitudes, which are the 3 colors: pink, magenta, and purple. If the legend was designed to change based upon the layers selected, it would be interesting to see this map used for other natural events, such as tornadoes, hurricanes, volcanic eruptions, blizzards, etc. On a final, less intensive note, when the markers are selected, they should also provide the date and time at which the earthquake was recorded.
