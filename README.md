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

![eq_street](https://user-images.githubusercontent.com/92493572/151247884-bc0cad43-f436-4ba4-ba93-b31e4c131cc4.png)

![eq_sat_tect](https://user-images.githubusercontent.com/92493572/151247904-55127df9-e69d-4c4f-b93c-4f0c5af1f7a9.png)

![majEq_dark_tect](https://user-images.githubusercontent.com/92493572/151247910-4e18f756-ae64-464a-b852-0d10fc9e456c.png)


## Discussion
This map could benefit from additional modification such as a legend to hold major earthquakes magnitudes, which are the 3 colors: pink, magenta, and purple. If the legend was designed to change based upon the layers selected, it would be interesting to see this map used for other natural events, such as tornadoes, hurricanes, volcanic eruptions, blizzards, etc. On a final, less intensive note, when the markers are selected, they should also provide the date and time at which the earthquake was recorded.
