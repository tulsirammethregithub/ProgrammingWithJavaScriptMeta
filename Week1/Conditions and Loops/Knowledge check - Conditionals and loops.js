/* Congratulations! You passed!
Grade received 100%
To pass 80% or higher
  */
 /*

1.
Question 1
Based on the following code, what will print out when the variable  i  has the value  3 ?
 */


if(i < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
/* 

Hello


Goodbye

Correct
That's correct! The code inside the if statement will execute because the condition  i < 5  is true.
 */
/* 2.
Question 2
Based on the following code, what will print out when the variable  i  has the value  1 ?

 */
  if(i == 0 && i == 1) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
/* 

Hello


Goodbye

Correct
That's correct! The condition checks if  i  is equal to  0  AND  1 . Since it is not possible for  i  to be both values at the same time, the result of this check is false. Therefore, the code inside the else statement will run. */

/* 
3.
Question 3
How many times will the following code print the word 'Hello'?
 */


for (i = 0; i < 2; i++) {
    console.log("Hello");
}
/* 

1


2


3


4

Correct
That's correct! The loop will run twice based on the condition  i < 2 . */
/* 

4.
Question 4
How many times will the following code print the word 'Hello'?

*/
var i = 0;
while(i < 3) {
  console.log("Hello");
  i++;
}
/* 


1


2


3


4

Correct
That's correct! The loop will run 3 times based on the condition  i < 3 .
*/

for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }​
}
/* 


2


3


4


6

Correct
That's correct! The inner loop will be run twice by the outer loop. Since the inner loop runs 3 times, the  console.log  will be called 6 times in total.
*/

/* 6.
Question 6
Based on the following code, what will print out when the variable  i  has the value  7 ?
 */
  if(i <= 5) {
    console.log("Hello");
  } else if(i <= 10) {
    console.log("Goodnight");
  } else {
    console.log("Goodbye");
  }
/* 

Hello


Goodnight


Goodbye

Correct
That's correct! The code inside the else if statement will execute. The first condition fails because the value of  i  is greater than 5. The second condition succeeds because the value of  i  is less than 10.
 */
/* 7.
Question 7
Based on the following code, what will print out when the variable  i  has the value  3 ?

12345678910111213

  switch(i) {
    case 1:
      console.log("Hello");
      break;
    case 2:
      console.log("Goodnight");
      break;
    case 3:
      console.log("Goodbye");
      break;
  }

1 / 1 point

*/
switch(i) {
    case 1:
      console.log("Hello");
      break;
    case 2:
      console.log("Goodnight");
      break;
    case 3:
      console.log("Goodbye");
      break;
  }
/* 

Hello


Goodnight


Goodbye

Correct
That's correct! The code for case  3  will run.
 */
/* 8.
Question 8
Based on the following code, what will print out when the variable  i  has the value  3 ?
 */

if(i == 2 || i == 3) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

  /* 
  

Hello


Goodbye

Correct
That's correct! The condition checks if  i  is equal to  2  OR  3 . Since the value of  i  is  3 , the code inside the if statement will run.

  */