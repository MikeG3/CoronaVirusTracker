//MAIN SCRIPT FILE

//GLOBAL VARIABLES
var backgroundColor = "#00CDEF";
var date = new Date();

function showMap(){
  document.getElementById("map").innerHTML = getMap();
}//close function strat screen


//CODE TO BE EXECUTED
showMap();
displayStats();
getProvinceElements();
updateData();