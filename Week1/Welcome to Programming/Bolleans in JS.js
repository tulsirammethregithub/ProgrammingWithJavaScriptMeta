/*
Bollean Data type is used to check if a statement is true or false
It is used to check if two vales are same or not and return true ot false
*/

//Check if 1 is less that 2 using : lessthan simbole <
console.log(1 < 2);

//Check if 1 is greater that 2 using : greaterthan simbole <
console.log(1>2);

//check if 1 is equal to 2 using : double equal to symbol ==
console.log(1==2);

/*
dont get confused with single =(Assignment operator) , double equal sign == (Equal Operator)
and triple equal ===(Strict Equality Operator) . let me give you an Example
*/

//Assigment operator single equal = : used to assign a value to a varibale
var Name = "1";

//Equal Operator == : This will ignore the DataType and only check if both value looks the same
//1 == 1 is true  and
console.log(1 == 1);

//It means 1 =='1' is true and 
console.log(1 == '1')

// Name == 1 is also true
console.log(Name == 1);

//Strict Equal operator === : This is more unforgiving means it will check DataType as well

//It means 1 ==='1' is false and 
console.log(1==='1')
//1 === 1 is true  and
console.log(1 === 1);
// Name === 1 is also false
console.log(Name === '1');
//But this is not the case when "1" === '1' as both are strings
console.log("1" === '1')

//The unqality operator != : it means a vales is not qual to other vales
console.log(1!='1'); //This give us false as 1 is equal to 1 

//Strict Uquality operator !== : it will also check the data type
console.log(1!=='1');// This will gove us true as 1 is not equal to '1' as they have different data types