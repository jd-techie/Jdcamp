mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: campground.geometry.coordinates,// starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ Offset: 25})
        .setHTML(
            `<h5>${campground.title}</h5><p>${campground.location}</p>`
        )
    )
    .addTo(map)