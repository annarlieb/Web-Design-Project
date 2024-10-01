
// FOR ALL PAGES

function toggleDarkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.getElementById("modeButton");
    const elements = document.getElementsByClassName('logoImg');

    // Reset the animation by removing and re-adding the class
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("expandAnimation");
        void elements[i].offsetWidth; // Trigger reflow to reset the animation
        elements[i].classList.add("expandAnimation");
    }

    if (element.classList.contains("dark-mode")) { // if dark mode is on 
        button.innerHTML = "Light Mode";
        for (let i = 0; i < elements.length; i++) {
            elements[i].src = "images/logoDarkMode.svg";
        }
    } else {
        button.innerHTML = "Dark Mode"; // if dark mode is not on
        for (let i = 0; i < elements.length; i++) {
            elements[i].src = "images/logoLightMode.svg";
        }
    }
}


// FOR WHERE TO STAY PAGE
function sortByPrice() {
    const table = document.getElementById('hotelTable');
    const rows = Array.from(table.tBodies[0].rows);

    rows.sort((a, b) => {
        const priceA = parseFloat(a.cells[1].innerText.replace('€', ''));
        const priceB = parseFloat(b.cells[1].innerText.replace('€', ''));
        return priceA - priceB;
    });

    table.tBodies[0].append(...rows);
}

function sortByStars() {
    const table = document.getElementById('hotelTable');
    const rows = Array.from(table.tBodies[0].rows);

    rows.sort((a, b) => {
        const starsA = parseFloat(a.cells[2].innerText);
        const starsB = parseFloat(b.cells[2].innerText);
        return starsB - starsA;
    });

    table.tBodies[0].append(...rows);
}

document.getElementById('sortByPrice').addEventListener('click', sortByPrice);
document.getElementById('sortByStars').addEventListener('click', sortByStars);

// FOR THE MAP ON WHERE TO STAY PAGE
async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("hotelmap"), {
        center: { lat: 40.742, lng: -73.992 },
        zoom: 12,
        mapId: "4504f8b37365c3d0",
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
    });
    

    //DoubleTree by Hilton New York Downtown  40.70678390232198, -74.01158162428948
    const doubleTreeMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.70678390232198, lng: -74.01158162428948 },
        title: "DoubleTree",

    });
    const doubleTreeMarkerInfo = new google.maps.InfoWindow({
        content: "<p>DoubleTree<br>&euro;287<br>3.7 stars</p>", 
    });
    doubleTreeMarker.addListener("click", () => {
        doubleTreeMarkerInfo.open(map, doubleTreeMarker);
    });

    // The Jane Hotel 40.74034875386877, -74.00917836502961
    const janeMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.74034875386877, lng: -74.00917836502961 },
        title: "The Jane Hotel",
    });
    const janeMarkerInfo = new google.maps.InfoWindow({
        content: "<p>The Jane Hotel<br>&euro;199<br>3.7 stars</p>", 
    });
    janeMarker.addListener("click", () => {
        janeMarkerInfo.open(map, janeMarker);
    });

    // Crowne Plaza Times Square Manhattan, an IHG Hotel 40.762692525910786, -73.98429122428949
    const crownePlazaMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.762692525910786, lng: -73.98429122428949 },
        title: "Crowne Plaza Times Square Manhattan, an IHG Hotel",
    });
    const crownePlazaMarkerInfo = new google.maps.InfoWindow({
        content: "<p>Crowne Plaza<br>&euro;195<br>4.1 stars</p>", 
    });
    crownePlazaMarker.addListener("click", () => {
        crownePlazaMarkerInfo.open(map, crownePlazaMarker);
    });


    // Bryant Park Hotel 40.75463080823764, -73.98377624016237
    const bryantParkMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.75463080823764, lng: -73.98377624016237 },
        title: "Bryant Park Hotel",
    });
    const bryantParkMarkerInfo = new google.maps.InfoWindow({
        content: "<p>Bryant Park Hotel<br>&euro;352<br>4.5 stars</p>", 
    });
    bryantParkMarker.addListener("click", () => {
        bryantParkMarkerInfo.open(map, bryantParkMarker);
    });

    // Arlo SoHo 40.72666727858953, -74.00729384863365
    const arloMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.72666727858953, lng: -74.00729384863365 },
        title: "Arlo SoHo",
    });
    const arloMarkerInfo = new google.maps.InfoWindow({
        content: "<p>Arlo SoHo<br>&euro;300<br>4.2 stars</p>", 
    });
    arloMarker.addListener("click", () => {
        arloMarkerInfo.open(map, arloMarker);
    });


    // Ace Hotel New York 40.74799866244459, -73.98858275868206
    const aceMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.74799866244459, lng: -73.98858275868206 },
        title: "Ace Hotel New York",
    });
    const aceMarkerInfo = new google.maps.InfoWindow({
        content: "<p>Ace Hotel New York<br>&euro;320<br>4.3 stars</p>", 
    });
    aceMarker.addListener("click", () => {
        aceMarkerInfo.open(map, aceMarker);
    });

    // Hampton Inn Manhattan/Times Square Central 40.75710143851913, -73.98806777455493
    const hamptonMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.75710143851913, lng: -73.98806777455493 },
        title: "Hampton Inn Manhattan/Times Square Central",
    });
    const hamptonMarkerInfo = new google.maps.InfoWindow({
        content: "<p>Hampton Inn<br>&euro;148<br>4.3 stars</p>", 
    });
    hamptonMarker.addListener("click", () => {
        hamptonMarkerInfo.open(map, hamptonMarker);
    });

    // PUBLIC Hotel 40.7254964558879, -73.9918443248204
    const publicMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.7254964558879, lng: -73.9918443248204 },
        title: "PUBLIC Hotel",
    });
    const publicMarkerInfo = new google.maps.InfoWindow({
        content: "<p>PUBLIC Hotel<br>&euro;390<br>4.4 stars</p>", 
    });
    publicMarker.addListener("click", () => {
        publicMarkerInfo.open(map, publicMarker);
    });


    // Motto by Hilton New York City Chelsea 40.744617313928785, -73.99373259995313
    const mottoMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.744617313928785, lng: -73.99373259995313 },
        title: "Motto by Hilton New York City Chelsea",
    });
    const mottoMarkerInfo = new google.maps.InfoWindow({
        content: "<p>Motto<br>&euro;182<br>4.4 stars</p>", 
    });
    mottoMarker.addListener("click", () => {
        mottoMarkerInfo.open(map, mottoMarker);
    });

}
  
initMap();
  

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// FOR ATTRACTIONS PAGE

function togglePauseAnimation(){
    const button = document.getElementById("pauseButton");
    const elements2 = document.getElementsByClassName('carouselTwo');
    const elements3 = document.getElementsByClassName('carouselThree');
    // check if paused
    const el = elements2[0]; // if first element is paused, all are paused
    if(button.innerHTML == 'Play <br> Animations'){ // PAUSED so want to play
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.animation = "8s carousel2 infinite"
        }
        for (let i = 0; i < elements3.length; i++) {
            elements3[i].style.animation = "12s carousel3 infinite";
        }
        button.innerHTML = "Pause <br> Animations";
    }

    else{ // PLAYING so want to pause
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.animation = 'none';
        }
        for (let i = 0; i < elements3.length; i++) {
            elements3[i].style.animation = 'none';
        }
        button.innerHTML = "Play <br> Animations";
    }
}


