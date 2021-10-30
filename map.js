// Solar API key = S0OgpQV2Coclte3StxZXW0zXQHefPMdwjxbTJ5l1

var OpenStreetMap_Mapnik = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  );

window.onload = function() {
var map = L.map("map", {
    center: [30, 31],
    zoom: 2,
    // Values are x and y here instead of lat and long elsewhere.
    maxBounds: [[-120, -220], [120, 220]],
    layers: [OpenStreetMap_Mapnik]})}

const latitude = 30;
const longitude = 31;

"https://developer.nrel.gov/api/solar/solar_resource/v1.xml?api_key=S0OgpQV2Coclte3StxZXW0zXQHefPMdwjxbTJ5l1&lat=${latitude}&lon=${longitude}"

const data = fetch();

console.log(data)