// Add console.log to check and see if the code is working
console.log("working");

// Create the map object with a center and zoom level (approx zooms on USA)
let map = L.map('mapid').setView([40.7, -94.5], 4);
// ######### alternate way to perform the same action without setView()
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom: 4
// });

// Create tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then add our graymap tile layer to the map
streets.addTo(map);