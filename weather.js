const API_KEY = "9b1d08ca7a1d10ff6d116cbf54a68f6e";
const COORDS = 'coords';

function getWeather(){
 fetch(
     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}
function handleGeoSucces(position){
 const latitude = position.coords.latitude;
 const longitude = position.coords.longitude;
 const coordsObj = {
     latitude,
     longitude 
 };
 saveCoords(coordsObj);
 getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log('cant access geolocation');
   }
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        //getweather
    }
}
function init(){
    loadCoords();
}
init();