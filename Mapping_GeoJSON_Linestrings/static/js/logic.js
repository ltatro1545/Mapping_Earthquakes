// Add console.log to check and see if the code is working
console.log("working");

// Create the map object
// let map = L.map('mapid').setView([30, 30], 2);

// #################### MODULE 13.4.3 MAP LINES
// coordinates for each point to be used in the line
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Create a polyline using the line coords and make the line red
// L.polyline(line, {
//     color: "yellow"
// }).addTo(map);

// ################### MODULE 13.5.2 MAP GEOJSON POINT TYPE
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// ################### MODULE 13.5.2
// Grabbing GeoJSON data
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.city + "</h2>")
//     }
// }).addTo(map);

// Using onEachFeature layer callback
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
//       console.log(layer);
//      }
// }).addTo(map);

// Create tile layer that will be the background of the map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
  };

  // ######### alternate way to perform the same action without setView()
let map = L.map("mapid", {
    center: [44, -80],
    zoom: 2,
    layers: [light]
});

// Pass the map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes from GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/ltatro1545/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing GeoJSON data
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        style:myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
            + feature.properties.dst + "</h3>");
        }
    })
    .addTo(map);
});

// ################### MODULE 13.4.1 MAP A SINGLE POINT
// var marker = L.marker([34.0522, -118.2437]).addTo(map);

// add a circle to the map (radius is in meters!)
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);
// Can do exact same function a s above, but with L.circleMarker to have the radius measured in pixels!

// ################### MODULE 13.4.2 MAP MULTIPLE POINTS
// variable to hold cities.js cities array
// let cityData = cities;

// Loop through the cities array and create one marker for each city
// Then bind a popup marker to each point
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius:city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// added to map up above using L.geoJSON(sanFranAirport).addTo(map);