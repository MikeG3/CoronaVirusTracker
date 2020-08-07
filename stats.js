//File for showing stats

//Variables
var name = "Canada";
var totalInfections = 0, currentlyInfected = 0, recoveries = 0, death = 0;
var output = "";
var allData;

function updateStats(){
    //get stats here
    //FROM FETCH
    //UPDATE STATS ALGORITHMICALLY IN SCRIPT.JS AFTER DISPLAYING MAP
}//close function update stats

function displayProvincialStats(provinceIndex){
    output = name + "<br>";
    output += "Population: " + population[provinceIndex] + "<br>";
    output += "Total Infections: " + totalInfections + "<br>";
    output += "Current Infections: " + currentlyInfected + "<br>";
    output += "Recoveries: " + recoveries + "<br>";
    output += "Deaths: " + death;
    document.getElementById("provincialStats").innerHTML = output;
}//close function

function displayNationalStats(){
    output = "Canada<br>";
    output += "Population: " + "35151728<br>";
    output += "Total Infections: " + totalInfections + "<br>";
    output += "Current Infections: " + currentlyInfected + "<br>";
    output += "Recoveries: " + recoveries + "<br>";
    output += "Deaths: " + death;
    document.getElementById("nationalStats").innerHTML = output;
}//close function

function updateData(){
    fetch('https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html')
    .then( res => console.log(res))
    //.then( allData = res.json())
    .then( data => console.log(data))
    // .then( allData => res )
  
}//close function update data

function getProvinceData(provinceIndex){
    console.log("--> stats.getProvinceData(provinceIndex) called");
    name = provinceNames[provinceIndex];
    //Get the rest of the data
    // totalInfections = ;
    // currentlyInfected = ;
    // recoveries = ;
    // death = ;
    displayProvincialStats(provinceIndex);
//ADD CODE HERE
//UPDATE AND DISPLAY PROVINCIAL DATA, TRIGGERED BY MOSE OVER PROVINCE IN MAP.JS
}//close function get province data
