// Creating our initial map object:
// Starting Map Location and How far zoomed in
let myMap = L.map("map", {
  center: [41.60703979722736, -81.34939286134525],
  zoom: 10
});

// Adding a tile layer (the background map image)see options elsewhere:

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
let marker = L.marker([41.60703979722736, -81.34939286134525], {
  draggable: true,
  title: "Novelty"
}).addTo(myMap);

let marker1 = L.marker([41.58142223723315, -81.20405976930941], {
  draggable: true,
  title: "Chardon"
}).addTo(myMap);


// Binding a popup to our marker
marker.bindPopup("Novelty \n 8400 Fairmount Rd. \n Novelty, OH 44024");
marker1.bindPopup("Chardon \n 101 Main St \n Chardon, OH 44024");