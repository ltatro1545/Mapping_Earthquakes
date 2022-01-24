// Add console.log to check and see if the code is working
console.log("working");

// Create the map object with a center and zoom level (approx zooms on USA)
let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// ######### alternate way to perform the same action without setView()
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom: 4
// });
// #################### MODULE 13.4.3 MAP LINES
// coordinates for each point to be used in the line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coords and make the line red
L.polyline(line, {
    color: "yellow"
}).addTo(map);


// Create tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then add our graymap tile layer to the map
streets.addTo(map);

// ################### MODULE 13.4.1 MAP A SINGLE POINT
// var marker = L.marker([34.0522, -118.2437]).addTo(map);

// add a circle to the map (radius is in meters!)
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);
// Can do exact same function a s above, but with L.circleMarker to have the radius measured in pixels!

// ################### MODULE 13.4.2 MAP MULTIPLE POINTS
// variable to hold cities.js cities array
let cityData = cities;

// Loop through the cities array and create one marker for each city
// Then bind a popup marker to each point
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius:city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

