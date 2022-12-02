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
c1.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-cecchina"; });

// 2 - Fungo, Rome, Italy
c2 = L.marker([41.9585, 12.54321], {icon: ballIcon}).addTo(map);
L.polygon([[41.95838, 12.5431],[41.95864, 12.54313],[41.95863, 12.54333],[41.95837, 12.5433]], {color: "purple"}).addTo(map);
c2.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-fungo"; });

// 3 - Sant'Alberto Magno, Rome, Italy
c3 = L.marker([41.96425, 12.53511], {icon: ballIcon}).addTo(map);
L.polygon([[41.96415, 12.5351],[41.96429, 12.53528],[41.964369, 12.53516],[41.964229, 12.534969]], {color: "purple"}).addTo(map);
c3.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-santalbertomagno"; });

// 4 - San Mattia, Rome, Italy
c4 = L.marker([41.94679, 12.55283], {icon: ballIcon}).addTo(map);
L.polygon([[41.94673, 12.55267],[41.94695, 12.55284],[41.94687, 12.55302],[41.94665, 12.55284]], {color: "purple"}).addTo(map);
c4.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-sanmattia"; });

// 5 - San Ponziano, Rome, Italy
c5 = L.marker([41.94687, 12.54486], {icon: ballIcon}).addTo(map);
L.polygon([[41.946738, 12.54494],[41.947044, 12.544962],[41.94705, 12.54474],[41.94675, 12.54472]], {color: "purple"}).addTo(map);
c5.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-sanponziano"; });

// 6 - Sam, Rome, Italy
c6 = L.marker([41.938225, 12.551807], {icon: ballIcon}).addTo(map);
L.polygon([[41.937965, 12.552131],[41.937936, 12.551945],[41.938171, 12.551871],[41.938204, 12.552044]], {color: "purple"}).addTo(map);
L.polygon([[41.938362, 12.551648],[41.938382, 12.551890],[41.938488, 12.551871],[41.938465, 12.551633]], {color: "purple"}).addTo(map);
c6.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-sam"; });

// 7 - Cicogna, Rome, Italy
c7 = L.marker([41.927260, 12.564672], {icon: ballIcon}).addTo(map);
L.polygon([[41.927182, 12.564548],[41.927378, 12.564651],[41.927336, 12.564793],[41.927144, 12.564696]], {color: "purple"}).addTo(map);
c7.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-cicogna"; });

// 8 - Kobe Bryant, Santa Marinella, Italy
c8 = L.marker([42.033764, 11.854642], {icon: ballIcon}).addTo(map);
L.polygon([[42.033676, 11.854504],[42.033721, 11.854824],[42.033847, 11.854784],[42.033804, 11.854472]], {color: "purple"}).addTo(map);
c8.on('click', function(ev) { window.location.href = "wiki.html#ita-sntmar-kobe"; });

// 9 - Le Jardin des Personnalités, Honfleur, France
c9 = L.marker([49.426259, 0.2312725], {icon: ballIcon}).addTo(map);
L.polygon([[49.4261195, 0.231272],[49.4261855, 0.231450],[49.4264015, 0.231273],[49.426338, 0.231092]], {color: "purple"}).addTo(map);
c9.on('click', function(ev) { window.location.href = "wiki.html#fra-hon-jardin"; });

// 10 Piazza Trieste, Gaeta, Italy
c10 = L.marker([41.2122655, 13.5703467], {icon: ballIcon}).addTo(map);
L.polygon([[41.2123055, 13.5701945],[41.2121595, 13.5703585],[41.212238, 13.570491],[41.212389, 13.57031]], {color: "purple"}).addTo(map);
c10.on('click', function(ev) { window.location.href = "wiki.html#ita-gae-trieste"; });

// 11 Aguzzano, Rome, Italy
c11 = L.marker([41.9377877, 12.5637133], {icon: ballIcon}).addTo(map);
L.polygon([[41.9376949, 12.5638586],[41.9378245, 12.5638983],[41.9378826, 12.5635725],[41.9377509, 12.5635302]], {color: "purple"}).addTo(map);
c11.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-aguzzano"; });

// 12 Parco delle Valli, Rome, Italy
c12 = L.marker([41.938920285022895, 12.524164940879649], {icon: ballIcon}).addTo(map);
L.polygon([[41.9387986, 12.5242092],[41.9389088, 12.5243346],[41.939053, 12.5241106],[41.9389417, 12.5239832]], {color: "purple"}).addTo(map);
c12.on('click', function(ev) { window.location.href = "wiki.html#ita-rma-parcovalli"; });