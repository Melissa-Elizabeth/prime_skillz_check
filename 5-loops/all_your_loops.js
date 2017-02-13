// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for(i = 0; i < 5; i++)

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
  i = 6;
while(i > 0) {
  i -= 2;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

// The variable i, which starts at 0, is checking to see if its value is less than the length of the number array. 
// The length of the numbers array is 7.
// Since 0 is less than 7, it will run the function, which is total(0) + the number at the 0 spot in the number array (1)
// The new total will be logged out which turns var total to 1
// The variable i will now be increased by 1 due to the i++
// This loop will run 7 times 
