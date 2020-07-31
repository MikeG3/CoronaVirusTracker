//File for showing stats

//Variables
var name = "Canada";
var population = 0, totalInfections = 0, currentlyInfected = 0, recoveries = 0, death = 0;
var output = "";
var allData;

function updateStats(){
    //get stats here
    //FROM FETCH
    //UPDATE STATS ALGORITHMICALLY IN SCRIPT.JS AFTER DISPLAYING MAP
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

function updateData(){
    fetch('https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html')
    .then( res => console.log(res))
    //.then( allData = res.json())
    .then( data => console.log(data))
    // .then( allData => res )
    console.log(allData);

}//close function update data

function getProvinceData(provinceName){
    name = provinceName;
    displayStats();
//ADD CODE HERE
//UPDATE AND DISPLAY PROVINCIAL DATA, TRIGGERED BY MOSE OVER PROVINCE IN MAP.JS
}//close function get province data