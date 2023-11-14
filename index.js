function myFunction() {
    var element = document.getElementById("ul--container");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

var flight = document.getElementById("flight--book");
var train = document.getElementById("train--book");
var bus = document.getElementById("bus--book");
var hotel = document.getElementById("hotel--book");

function flightfn(){
    flight.style.display = "flex";
    train.style.display = "none";
    bus.style.display = "none";
    hotel.style.display = "none";
}

function trainfn(){
    flight.style.display = "none";
    train.style.display = "flex";
    bus.style.display = "none";
    hotel.style.display = "none";
}

function busfn(){
    flight.style.display = "none";
    train.style.display = "none";
    bus.style.display = "flex";
    hotel.style.display = "none";
}

function hotelfn(){
    flight.style.display = "none";
    train.style.display = "none";
    bus.style.display = "none";
    hotel.style.display = "flex";
}

function tap(val) {
    var carouselContainer = document.getElementById("carousel_ID");
    console.log(val);
    if (val === 0) {
        carouselContainer.scrollLeft -= 440;
    }
    else {
        carouselContainer.scrollLeft += 440;
    }
}