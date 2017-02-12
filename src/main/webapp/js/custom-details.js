function getRandomDateWithinMonth() {
    // returns random number between 0 and 30
    const rd = Math.floor(Math.random() * 31);
    const rh = Math.floor(Math.random() * 24);
    const rm = Math.floor(Math.random() * 61);
    const randDate = moment().subtract(rd, 'days').subtract(rh, 'hours').subtract(rm, 'minutes');
    return randDate.toDate();
}

var options = {
    series: {
        lines: {
            show: true
        },
        points: {
            radius: 3,
            fill: true,
            show: true
        }
    },
    xaxis: {
        mode: "time",
        tickSize: [1, "day"],
        tickLength: 0,
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {
        axisLabel: "# Accidents",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 3,
        tickFormatter: function (v, axis) {
            if (v == parseInt(v)) {
                return v;
            } else return v-0.5;
        }
    },
    legend: {
        noColumns: 0,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 2,
        borderColor: "#633200",
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
    },
    colors: ["#FF0000", "#0022FF"]
};

function getGraphData(i) {
    var ajaxdata = [];
    $.ajax({
        url:"/incidenthistory" + location.toString().substring(location.toString().indexOf("?"))
    }).then(function(data) {
        ajaxdata = data.content;
        for (i = 0; i < ajaxdata.length; i++) {

            ajaxdata[i][0] = moment(ajaxdata[i][0], "YYYY-MM-DD").toDate();
            ajaxdata[i][1] = parseInt(ajaxdata[i][1]);
        };

        var dataset = [
            {
                data: ajaxdata
            }
        ];
        $.plot($("#flotgraph"), dataset, options);
    });
    // return setData;
}
$(document).ready(function() {
    // in real example, this data will be taken from server
    var loc = location.toString();
    var dummyindex = loc.substr(loc.indexOf("&dummyindex=") + 12, 1);
    getGraphData(parseInt(dummyindex));

    // get query params, set to widget div title
    var locurl = location.toString();
    const lat = locurl.substring(locurl.indexOf("?") + 5, locurl.indexOf("&lng"));
    const long = locurl.substring(locurl.indexOf("&lng") + 5, locurl.indexOf("&dummyindex"));
    var str = lat + ", " + long;
    var desc = locurl.substring(locurl.indexOf("&desc") + 6);
    while (desc.indexOf("%20") > -1) {
        desc = desc.replace("%20", " ");
    }
    $("#locfield").text(desc);

    // fallback data if get request fails
    var setData = [];
    switch (parseInt(dummyindex)) {
        case 0:
            setData = [
                [moment("2017, 01, 12", "YYYY-MM-DD").toDate(), 2],
                [moment("2017, 01, 18", "YYYY-MM-DD").toDate(), 3],
                [moment("2017, 01, 23", "YYYY-MM-DD").toDate(), 7],
                [moment("2017, 01, 30", "YYYY-MM-DD").toDate(), 4],
                [moment("2017, 02, 12", "YYYY-MM-DD").toDate(), 3]
            ];
            break;
        case 1:
            setData = [
                [moment("2017, 01, 11", "YYYY-MM-DD").toDate(), 2],
                [moment("2017, 01, 12", "YYYY-MM-DD").toDate(), 3],
                [moment("2017, 01, 16", "YYYY-MM-DD").toDate(), 7],
                [moment("2017, 01, 21", "YYYY-MM-DD").toDate(), 2],
                [moment("2017, 01, 22", "YYYY-MM-DD").toDate(), 4],
                [moment("2017, 02, 05", "YYYY-MM-DD").toDate(), 4],
                [moment("2017, 02, 12", "YYYY-MM-DD").toDate(), 3]
            ];
            break;
        case 2:
            setData = [
                [moment("2017, 01, 13", "YYYY-MM-DD").toDate(), 2],
                [moment("2017, 01, 15", "YYYY-MM-DD").toDate(), 3],
                [moment("2017, 01, 22", "YYYY-MM-DD").toDate(), 4],
                [moment("2017, 01, 28", "YYYY-MM-DD").toDate(), 5],
                [moment("2017, 01, 31", "YYYY-MM-DD").toDate(), 4],
                [moment("2017, 02, 12", "YYYY-MM-DD").toDate(), 3]
            ];
            break;
    }
    // console.log(setData);

    var dataset = [
        {
            data: setData
        }
    ];
    $.plot($("#flotgraph"), dataset, options);

    // hardcoded data, fallback if ajax fails
    tabledata = [];
    switch (parseInt(dummyindex)) {
        case 0:
            tabledata = [
                {datetime: "2017-02-12 13:07",   location: "PIE"},
                {datetime: "2017-02-06 00:21",  location: "Ang Mo Kio Street 33"},
                {datetime: "2017-02-01 08:04",  location: "Lorong 5 Serangoon Gardens"},
                {datetime: "2017-01-28 13:01",  location: "45 Sengkang View"},
                {datetime: "2017-01-23 15:57",  location: "Kallang Street 74"},
                {datetime: "2017-01-22 08:22",  location: "Marine Parade Street 30"},
                {datetime: "2017-01-19 09:06",  location: "Hougang Green"},
                {datetime: "2017-01-17 22:42",  location: "Lorong 2 Thomson"},
                {datetime: "2017-01-14 19:52",  location: "Paya Lebar Avenue"},
                {datetime: "2017-01-12 03:18",  location: "Boon Lay Avenue North"},
            ];
            break;
        case 1:
            tabledata = [
                {datetime: "2017-02-12 18:53",  location: "Lorong 6 Toa Payoh"},
                {datetime: "2017-02-06 19:07",  location: "Yishun Street 84"},
                {datetime: "2017-02-04 16:47",  location: "Bukit Panjang Avenue"},
                {datetime: "2017-02-04 19:34",  location: "Jalan Dusun 2"},
                {datetime: "2017-02-01 12:20",  location: "Serangoon Gardens Street 34"},
                {datetime: "2017-01-31 21:36",  location: "Jurong East Street 10"},
                {datetime: "2017-01-22 23:42",  location: "Lorong 8 Boon Keng"},
                {datetime: "2017-01-20 07:32",  location: "Pasir Ris Crescent"},
                {datetime: "2017-01-14 08:49",  location: "Lorong 5 Balestier"},
            ];
            break;
        case 2:
            tabledata = [
                {datetime: "2017-02-12 18:10",  location: "Serangoon Ave 2"},
                {datetime: "2017-02-06 23:47",  location: "Jalan Pintau"},
                {datetime: "2017-02-01 09:28",  location: "Serangoon Gardens Street 87"},
                {datetime: "2017-01-29 22:04",  location: "Somerset Terrace"},
                {datetime: "2017-01-23 16:09",  location: "Tampines Street 25"},
                {datetime: "2017-01-20 02:06",  location: "Yishun Court"},
                {datetime: "2017-01-17 23:48",  location: "Pasir Ris Street 34"},
                {datetime: "2017-01-13 12:29",  location: "Serangoon Gardens Street 32"},
            ];
            break;
    }

    $.ajax({
        url:"/getfulltable" + location.toString().substring(location.toString().indexOf("?")),
        error: function() {
        $.each(tabledata, function(key, data) {
            const parsedDate = moment(data.datetime, "YYYY-MM-DD HH:mm").format("MMMM D YYYY hh:mma");
            $("<tr><td>" + data.location + "</td><td>" + parsedDate + "</td></tr>").appendTo("#append-target");
        });
        }
    }).then(function(data) {
        tabledata = data.content;
        console.log(tabledata);
        $.each(tabledata, function(key, data) {
            const parsedDate = moment(data.datetime, "YYYY-MM-DD HH:mm").format("MMMM D YYYY hh:mma");
            $("<tr><td>" + data.location + "</td><td>" + parsedDate + "</td></tr>").appendTo("#append-target");
        });
    });

});

$("#clickme").click(function() {
    $.ajax({
        url:"/incidenthistory"
    }).then(function(data) {
        // console.log(data.content);
    });
});

