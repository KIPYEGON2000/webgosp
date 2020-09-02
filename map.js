//*****************************Javascript file************************
//
/***Map initialization***/
//

var mep = new L.Map('map', {
	center: new L.LatLng(-1.28333,36.81667),
	zoom: 13,
	minZoom: 12,
	maxZoom: 16
});
//
/***Background layer***/
//
var osm = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
mep.addLayer(osm);
//
//or
//
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//
//or a more user friendly style
//
var mep = L.map('map',{scrollWheelZoom:false}).setView([-2.652, 36.8325], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mep);
//
/***Add a WMS Layer to the Map***/
//
var tileUrl = 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=[insert-your-apikey-here]';
layer = new L.TileLayer(tileUrl, {maxZoom: 18});
//
/***Add a Default Marker to the Map***/
//
var marker = L.marker([-2.652, 36.8325]).addTo(mep);
//
/***Add a Custom Marker to the Map***/
//
var MyIcon = L.icon({
iconUrl: 'http://localhost/svg/flame.svg',
iconSize: [38, 95], // size of the icon
popupAnchor: [0,-15]
});
var marker = L.marker([-2.652, 36.8325], {icon: MyIcon}).addTo(mep);
//
/***Event handlers***/
//
//in js
L.marker([-2.652, 36.8325], {icon: MyIcon}).bindPopup('Nairobi').addTo(mep);
//in css
.custom .leaflet-popup-tip,
.custom .leaflet-popup-content-wrapper {
background: #e93434;
color: #ffffff;
}

//
/***end***/
//

