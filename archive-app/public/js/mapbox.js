import mapboxgl from 'mapbox-gl';mapboxgl.accessToken = 'pk.eyJ1Ijoia2VsbHlkb3RtZWRpYSIsImEiOiJja2Q4d2t1NmUwOHg4MnlzZ281ZngyM3RxIn0.AracymtutWBf80T5ys7yyw';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
});
