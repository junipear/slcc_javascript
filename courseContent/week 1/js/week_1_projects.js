//////////////////PROBLEM 1////////////////////


//Create a function called isWeekEnd that accepts a day of the week (Monday - Sunday) as it's only parameter.
//If the argument you passed in is equal to 'Saturday', return true. If it's not, return false.
function isWeekEnd(day) {
  if (day == "Saturday"){
    return true; 
  }
    return false;
  }

  isWeekEnd("Saturday");


var = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


//////////////////PROBLEM 2////////////////////


//Use the same function in problem 1 and check to see if day is equal to Saturday or Sunday. Return true or false.


function isWeekEnd(day) {
  if (day == "Saturday" || day == "Sunday" ){
    return true; 
  }
    return false;
  }

  isWeekEnd("Friday");

//////////////////PROBLEM 3////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
var person = prompt("Please enter your name", "");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
} return txt;
}
getName();

//working one...

function getName() {
  var name = prompt("Your Name Please?");
  return name;
}
getName();


//////////////////PROBLEM 4////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var name = prompt("Your Name Please?");
  return "Hello, " + name + " Welcome.";
}
welcome();


//////////////////PROBLEM 5////////////////////



//Create a function called myName that returns your name

function myName(){
  var name = "asenath";
  return name;
}
myName();



//Now save the function definition of myName into a new variable called newMyName

function myNewName() {
  var name = prompt("what is your name?");
  return "#" + name + "isthebombdiggity";
}
myNewName();

//Now alert the result of invoking newMyName



//////////////////PROBLEM 6////////////////////



//Create a function  to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

var a = 4;
var x = 22;

function addNumbers(a,x){
  return x*a;
}
var z=addNumbers(4,22);


    function multiplyNumbers(x,y){
        return x*y;
    }
    var z= multiplyNumbers(4,5); // Function is called, return value will end up in z




//////////////////PROBLEM 7////////////////////



//Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

//Code Here
