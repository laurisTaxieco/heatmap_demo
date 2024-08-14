const panelTimeValue = document.querySelector("#panel-time-value");
const sliderInput = document.querySelector("#slider-input");
let is_pick_up = true;

sliderInput.oninput = () => {
  value = sliderInput.value;
  panelTimeValue.textContent =
    value.length === 1 ? "0" + value + ":00" : value + ":00";

  selectedTimeRange = is_pick_up
    ? pickUpAddressPoints[value]
    : dropOffAddressPoints[value];

  map.removeLayer(heat);

  newData = selectedTimeRange.map(function (p) {
    return [p[0], p[1], p[2]];
  });

  heat = L.heatLayer(
    newData,
    is_pick_up ? pickUpHeatOption : dropOffHeatOption
  );

  heat.addTo(map);
};
