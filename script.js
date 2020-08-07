//MAIN SCRIPT FILE

//GLOBAL VARIABLES
var backgroundColor = "#00CDEF";
var date = new Date();

function showMap(){
  document.getElementById("map").innerHTML = getMap();
}//close function strat screen


//CODE TO BE EXECUTED
//Load screen with map and stats
showMap();
// displayNationalStats();
//Set event listner
getProvinceElements();
//Fetch the data
updateData();

getProvinceElements();