// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6214, -93.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6214, -122.3790], //SFO Airport
    [30.1975, -97.6664],  //AUS Airport
    [38.7499, -90.3748],  //STL Airport
    [43.6777, -79.6248],  //YYZ Airport
    [40.6413, -73.7781]   //JFK Airport
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '10,20'
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);