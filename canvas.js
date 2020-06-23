// canvas can now be called by this variable
var canvas = document.querySelector('canvas');

//set canvas height and width
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 1.25;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
//RESPOND TO ARROW KEY INPUT (ASCII 37-40 for arrows)
window.addEventListener('keydown', move);
canvas.addEventListener('keydown', move);

//Gives canvas API 2d drawing functions
var c = canvas.getContext('2d');

//GLOBAL VARIABLES
//booleans
//integers
var i = 0, j = 0, k = 0;
var hexColor = 0;
var hexValue;
//date
var date = new Date();
//DATA
var data = [];
var colors = ["#90AABB", "#11BBAA","#22CC99","#33DD88","#44EE77","#55FF99", "6600AA"];
c.fillStyle = "#FF00EE";

//FUNCTION DEFINITIONS
function move(key) {
  //RESTART
  if (key.keyCode == 81 || key.keyCode == 27) {
    restart();
  }//close if
} //close move function

function restart() {
  //Re-intialize variables
  date = new Date();
  getDateData();
  //run game loop
  animate();
} //close function restart

function getDateData(){
  data.push(date.getFullYear());
  data.push(date.getMonth());
  data.push(date.getDate());
  data.push(date.getHours());
  data.push(date.getMinutes());
  data.push(date.getSeconds());
  data.push(date.getMilliseconds());
}//close function get date data

function displayDate(){
  c.font = "25px Arial";
  c.fillStyle = "#000000";
  c.fillText("The Date is:", 0, 25);
  c.fillText(date, 0, 65);
}//close function display Date

function displayData(){
  getDateData();
  c.font = "25px Arial";
  //c.fillStyle = "#000000";
  c.fillText("The Data extracted is:", 0, 125);
  for (i = 0 ; i < data.length ; i++){
    //hexColor = data[i]*128+160%1600000;
    //colors.push(hexColor);
    //hexValue = "#" + hexColor.toString(16);
    c.fillStyle = colors[i];
    c.fillText(data[i], 0, i*25+155);
    c.fillRect(100, i*25+135, data[i], 25);
  }//close for each data element
}//close function display Data

function animate() {
  displayDate();
  displayData();
  //requestAnimationFrame(animate);
} //close function play tic tac toe

//CODE TO BE EXECUTED
animate();
