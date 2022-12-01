// initialize
var map = L.map("map").setView([41, 12], 5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// ball icon
var ballIcon = L.icon({
	iconUrl: "../res/img/bball-icon.png",
	iconSize:     [24, 24],
	iconAnchor:   [12, 12],
});

// courts

// 1 - Cecchina, Rome, Italy
c1 = L.marker([41.94859, 12.54201], {icon: ballIcon}).addTo(map);
L.polygon([[41.94848, 12.54204],[41.94867, 12.54184],[41.94875, 12.54199],[41.94856, 12.54219]], {color: "purple"}).addTo(map);
c1.on('click', function(ev) { window.location.href = "wiki.html#cecchina"; });