const map = L.map('map').setView([0, 0],1);


L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=0ms7gNlUwVIk5xMWuoSI', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
noWrap: true
}).addTo(map);


var Bermuda = L.polygon([
    [25.774, -80.190],
    [18.466, -66.118],
    [32.321, -64.757],
]).addTo(map);

var Devilsea = L.polygon([
    [35.676, 139.650],
    [24.784, 141.322],
    [24.289, 153.986],
]).addTo(map);

var Alaska = L.polygon([
    [61.218, -149.900],
    [58.301, -134.420],
    [71.290, -156.788],
]).addTo(map);

var Nevada = L.polygon([
    [36.1699, -115.1398],
    [39.5296, -119.8138],
    [36.7378, -119.7871],
]).addTo(map);

var Michigan = L.polygon([
    [43.9553, -86.4526],
    [42.1167, -86.4542],
    [44.0886, -87.6576],
]).addTo(map);


