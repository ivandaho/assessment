var map;

var coords =
    [
        {
            "lat" : 1.333522,
            "lng" : 103.771872,
            "description": "PIE",
            "dummyindex": 0
        },
        {
            "lat" : 1.331061,
            "lng" : 103.850760,
            "description": "Lor 6 Toa Payoh",
            "dummyindex": 1
        },
        {
            "lat" : 1.348829,
            "lng" : 103.871676,
            "description": "Serangoon Ave 2",
            "dummyindex": 2
        }
    ];

$(document).ready(function () {
    $.ajax({
        url:"recentincidents",
        error: function(data) {
            setMap(coords);
        }
    }).then(function(data) {
        // if the next line is enabled, will get data from server
        // however it only sets the last marker
        // coords = data.content;
        // console.log(coords);
        setMap(coords);
    });
});

function setMap(coords) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new google.maps.LatLng(1.359822, 103.804906),
            mapTypeId: 'terrain'
        });
        $.each(coords, function(key, data) {
            var latLng = new google.maps.LatLng(data.lat, data.lng);
            // Creating a marker and putting it on the map
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: data.description
            });
            marker.addListener('click', function(aMarker) {
                // map.setCenter(marker.getPosition());
                const ll = marker.getPosition();
                llString = "lat=" + ll.lat() +
                    "&lng=" + ll.lng() +
                    "&dummyindex=" + data.dummyindex +
                    "&desc=" + data.description;
                var url = "details.html?" + llString;
                window.location.href= url;
            });
        });
}
