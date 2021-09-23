// ? Task:Check if Date is Valid

// Solution 1

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

console.log(isDateValid("December 17, 1995 03:24:00"));
// Result: true

// ! Explanation: Use the following snippet to check if a given date is valid or not.
