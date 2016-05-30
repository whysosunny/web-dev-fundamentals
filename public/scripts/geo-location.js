var geolocator = window.navigator.geolocation;

posOptions = {
    enableHighAccuracy : true
};



var error = function(err) {
    console.log(err);
};

// geolocator.getCurrentPosition(success, error, posOptions);


var startBtn = document.querySelector("a.start-watch");
startBtn.onclick = function() {
    watcher = geolocator.watchPosition(success, error, posOptions);

    function success(pos) {
        var table = document.querySelector("table.geo-table");
        var tr = document.createElement("tr");
        tr.innerHTML = ("<td><b>latitude: </b>" + pos.coords.latitude + "   <b>longitude: </b>" + pos.coords.longitude + "</td>");
        table.appendChild(tr);
    }

};

var stopBtn = document.querySelector("a.clear-watch");
stopBtn.onclick = function() {
    geolocator.clearWatch(watcher);
};

