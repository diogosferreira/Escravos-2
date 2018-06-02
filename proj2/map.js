var map;

function presentMap() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aWxkZWJyYW5jbyIsImEiOiJjamhrbGI5Z20wZGhjMzByMDB1eThrMnNiIn0.0OrsJpMxFGlkFSryh7uYDQ';
    map = new mapboxgl.Map({
        container: document.getElementById("map"),
        style: "mapbox://styles/matildebranco/cjhklfa8r0bck2rnewfbevy69",

        center: [-8.426084518432617, 40.20739355701786],
        zoom: 0,
        maxZoom: 16.1,
        tileLayer: {
            continuousWorld: false,
            noWrap: true
        }
    });
    map.on('load', function () {});

};

function loadMap(layers) {
    for (var i = 0; i < layers.length; i++) {
        map.addLayer(layers[i]);
    };
};

function removeMapL(layers) {
    
        for (var i = 0; i < layers.length; i++) {
            map.removeLayer(layers[i].id);
            map.removeSource(layers[i].id);
        };
}