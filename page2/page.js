const map = L.map('map').setView([0, 0],1);

L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addto(map);
