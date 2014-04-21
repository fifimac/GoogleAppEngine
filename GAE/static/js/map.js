function load(x,y) {
    var pyrmont = new google.maps.LatLng(x,y);
    map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: pyrmont,
    zoom: 15
    });
    var marker = new google.maps.Marker({position: pyrmont,map: map,title:"Hello World!" });
    }
function map_load() {
    x = document.getElementById("lat").value;
    y = document.getElementById("lng").value;
    load(x, y);
    }

function load_2(css_ref, new_url) {
    $(css_ref).load(new_url);
    }

function StartSearch() {
    sport1 = document.getElementById("sportinput").value;
    location1 = document.getElementById("locationinput").value;

    var search_url = "http://jmccarthycalendar.appspot.com/search?";
    var tmp = 0;
    if (sport1 == "Sport") {
    // No Sport input
    } else {
    search_url = search_url + "sport=" + sport1;
    tmp = 1;
    }

    if (location1 == "Location") {
    // No Sport input
    } else {
    if (tmp == 0) {
    search_url = search_url + "location=" + location1;
    } else {
    search_url = search_url + "&location=" + location1;
    }
    }
    // alert(search_url);
    // http://jmccarthycalendar.appspot.com/search?sport=Golf&location=naas
    CLoad('Search Results', search_url)
    }

function AddEventToCalendar(eid, et, ed, dp, loc) {
    var save_url = "http://jmccarthycalendar.appspot.com/AddUser?"
    save_url = save_url + "eventid=" + eid + "&";
    save_url = save_url + "event_title=" + et + "&";
    save_url = save_url + "event_description=" + ed + "&";
    save_url = save_url + "datepicker=" + dp + "&";
    save_url = save_url + "location=" + loc;
    //alert(save_url);
    CLoad('Event Added to Calendar', save_url)
    }

function accept_terms() {
    var load = window.open('http://jmccarthycalendar.appspot.com/UserLogin', '', 'scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
    }


var xmlHttp

function GetXmlHttpObject() {
    var xmlHttp = null;
    try {
    // Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
    // Internet Explorer
    try {
    xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    }
    return xmlHttp;
    }

function CLoad(header, str) {
    document.getElementById("leftheading").innerHTML = header;
    xmlHttp2 = GetXmlHttpObject();
    if (xmlHttp2 == null) {
    alert("Your browser does not support AJAX!");
    return;
    }
    var url = str;
    xmlHttp2.onreadystatechange = stateChangedCLoad;
    xmlHttp2.open("GET", url, true);
    xmlHttp2.send(null);
    xmlHttp2.close;
    }
function stateChangedCLoad() {
    if (xmlHttp2.readyState == 4) {
    document.getElementById("lefttxtblank").innerHTML = "";
    document.getElementById("lefttxtblank").innerHTML = xmlHttp2.responseText;
    }
    }
