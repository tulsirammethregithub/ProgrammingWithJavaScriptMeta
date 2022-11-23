//Solutions to the task - Are you old enough?
//Step 1: 
/* Declare a variable age using the var keyword and set it to the number 10. */
var age = 10;

//Step 2: 
/* Add an "if" statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, type "console.log" and "You get your income from your pension". */
var age = 10;
if (age >=65){
    console.log("Yo get your income from your pension");
}
//Step 3: 
/* Add an "else", followed with an "if", where you'll check if the value of age is less than 65 and greater than or equal to 18. Inside this if block type "console.log" and "Each month you get a salary". */
var age = 10;
if (age >=65){
    console.log("Yo get your income from your pension");
}else if(age < 65 && age >= 18){
    console.log("Each month you get salary");
}
//Step 4: 
/* Add another "else if", and this time check if the value of the age is under 18. Inside the if block, type "console.log" and "You get an allowance". */
var age = 10;
if (age >=65){
    console.log("Yo get your income from your pension");
}else if(age < 65 && age >= 18){
    console.log("Each month you get salary");
}else if(age < 18){
    console.log("You get an allowance")
}
//Step 5: 
/* Add an "else" statement to capture any other value. Inside the block, type "console.log" and "The value of the age variable is not numerical". */
var age = 10;
if (age >=65){
    console.log("Yo get your income from your pension");
}else if(age < 65 && age >= 18){
    console.log("Each month you get salary");
}else if(age < 18){
    console.log("You get an allowance")
}else {
    console.log('""The value of the age variable is not numerical"."');   
}
//Solutions to the Days of the Week program
//Step 1: 
/* On the next line, define a new variable, name it day, and set its value to Sunday. */
var day = `Sunday`;
//Step 2: 
/* Start coding a switch statement, passing the day variable as the expression to evaluate. */
var day = `Sunday`;
switch(day) {

}
//Step 3: 
/* Inside the switch, add cases for all the days of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below. */
var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Do something');
       break;
   case 'Tuesday':
       console.log('Do something');
       break;
   case 'Wednesday':
       console.log('Do something');
       break;
   case 'Thursday':
       console.log('Do something');
       break;
   case 'Friday':
       console.log('Do something');
       break;
   case 'Saturday':
       console.log('Do something');
       break;
   case 'Sunday':
       console.log('Do something');
       break;
}
//Step 4: 
/* At the very bottom of the switch statement, add the default case and add a "console.log"('There is no such day'). */
var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Do something');
       break;
   case 'Tuesday':
       console.log('Do something');
       break;
   case 'Wednesday':
       console.log('Do something');
       break;
   case 'Thursday':
       console.log('Do something');
       break;
   case 'Friday':
       console.log('Do something');
       break;
   case 'Saturday':
       console.log('Do something');
       break;
   case 'Sunday':
       console.log('Do something');
       break;
   default:
       console.log('There is no such day');
}
//Step 5: 
/* Finally, update the console.log calls for each case, based on whatever activity you have on each of the days. */
var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       console.log('There is no such day');
}
