// initialize
var map = L.map("map").setView([41, 12], 5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// some utilities and calculations
side = window.innerHeight * 0.034

// ball icon
var ballIcon = L.icon({
	iconUrl: "../res/img/bball-icon.png",
	iconSize:     [side, side],
	iconAnchor:   [side / 2, side / 2],
});

// courts

// 1 - Cecchina, Rome, Italy
c1 = L.marker([41.94859, 12.54201], {icon: ballIcon}).addTo(map);
L.polygon([[41.94848, 12.54204],[41.94867, 12.54184],[41.94875, 12.54199],[41.94856, 12.54219]], {color: "purple"}).addTo(map);
c1.on('click', function(ev) { window.location.href = "wiki.html#cecchina"; });