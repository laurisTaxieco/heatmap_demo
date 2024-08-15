var map = L.map("map").setView([22.29387082466803, 114.16950239228105], 12);

var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const pickUpHeatOption = {
  max: 7.134615384615385,
  minOpacity: 0.1,
  gradient: {
    0.1346153846153846: "blue",
    0.15384615384615385: "cyan",
    0.19230769230769232: "lime",
    0.23076923076923078: "yellow",
    0.28846153846153844: "red",
  },
};

const dropOffHeatOption = {
  max: 5.769230769230769,
  minOpacity: 0.1,
  gradient: {
    0.1346153846153846: "blue",
    0.15384615384615385: "cyan",
    0.17307692307692307: "lime",
    0.21153846153846154: "yellow",
    0.25: "red",
  },
};

var selectedTimeRange = pickUpAddressPoints[0];

data = selectedTimeRange.map(function (p) {
  return [p[0], p[1], p[2]];
});

var heat = L.heatLayer(data, pickUpHeatOption);

heat.addTo(map);

document.getElementById("relocate").addEventListener("click", function () {
  map.setView([22.29387082466803, 114.16950239228105], 12);
});
