fetch('./data/connections.json')
    .then((response) => response.json())
    .then((connections) => {
        var map = L.map('map').setView([59.3251172, 18.0710935], 5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        connections.forEach(connection => {
            var m1 = L.marker([connection.stop1.latitude, connection.stop1.longitude]).addTo(map);
            m1.bindPopup("<h3>" + connection.stop1.name + "</h3><div>" + connection.stop1.startYear + "</div><div>" + connection.stop1.description + "</div>");
            var m2 = L.marker([connection.stop2.latitude, connection.stop2.longitude]).addTo(map);
            m2.bindPopup("<h3>" + connection.stop2.name + "</h3><div>" + connection.stop2.startYear + "</div><div>" + connection.stop2.description + "</div>");

            var latLng = [[connection.stop1.latitude, connection.stop1.longitude], [connection.stop2.latitude, connection.stop2.longitude]];
            L.polyline(latLng).addTo(map);
        });
    });
