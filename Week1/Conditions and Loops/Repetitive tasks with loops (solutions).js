/* Repetitive tasks with loops (solutions)
Here are the solutions to the for and while loop exercise.

Task 1 */
for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');

/* 1
2
3
4
5
Counting completed!
Task 2 
 */

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');

/* 5
4
3
2
1
Countdown finished!
Task 3
*/
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');
/* Note: Name your increment variable i. Update the variable in the while loop using i++.

Task 4
Write a "while" loop that will perform the exact same repetitive code like the one below:
 */
var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');
/* Note: In the while loop, decrement the value of i using: i = i - 1.

Task 5
Write a "while" loop that will perform the exact same repetitive code like the one below:
 */
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};
