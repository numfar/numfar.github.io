fetch('./data/connections.json')
    .then((response) => response.json())
    .then((connections) => {
        var map = L.map('map').setView([59.3251172, 18.0710935], 5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        connections.forEach(connection => {
            L.marker([connection.stop1.latitude, connection.stop1.longitude]).addTo(map);
            L.marker([connection.stop2.latitude, connection.stop2.longitude]).addTo(map);
            });
        connections.map(con => {
            var latLng = [[con.stop1.latitude, con.stop1.longitude], [con.stop2.latitude, con.stop2.longitude]];
            L.polyline(latLng).addTo(map);
        });
    });
