//File for showing stats

//Variables
var name = "Canada";
var population = 0, totalInfections = 0, currentlyInfected = 0, recoveries = 0, death = 0;
var output = "";

function updateStats(){
    //get stats here

}//close function update stats

function displayStats(){
    output = name + "<br>";
    output += "Population: " + population + "<br>";
    output += "Total Infections: " + totalInfections + "<br>";
    output += "Current Infections: " + currentlyInfected + "<br>";
    output += "Recoveries: " + recoveries + "<br>";
    output += "Deaths: " + death;
    document.getElementById("stats").innerHTML = output;
}//close function