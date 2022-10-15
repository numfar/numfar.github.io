fetch('./data.json')
    .then((response) => response.json())
    .then((stops) => {
        var routes = [];
        var connections = [];

        var map = L.map('map').setView([stops[0].latitude, stops[0].longitude], 5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        stops.forEach(stop => L.marker([stop.latitude, stop.longitude]).addTo(map));
    });