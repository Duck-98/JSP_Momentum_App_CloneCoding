const COORDS = 'coords';
function handleGeoSucces(position){
    console.log(position);
}
function handleGeoError(){
    console.log("Can't access geolocation.");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        //getweathers
    }
} 

function init(){
 loadCoords();
}
init();