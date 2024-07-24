var map = L.map('map').setView([10.004358738557462, -84.21175669331792], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([10.004358738557462, -84.21175669331792]).addTo(map);