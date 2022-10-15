fetch('./data/stops.json')
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

/*
insert into route (route_name) values ('Rutt3');
insert into connection (node1,node2,route) values (5,6,3);
insert into route (route_name) values ('Rutt4');
insert into connection (node1,node2,route) values (7,8,4);
*/