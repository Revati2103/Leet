// Average Salary Excluding Minimum and Maximum

// In this lab, you will be implementing a function to calculate the average salary of employees excluding the minimum and maximum salary. You are given an array of unique integers salary where salary[i] is the salary of the ith employee. Your task is to return the average salary of employees excluding the minimum and maximum salary. The answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: salary = [4000, 3000, 1000, 2000];
// Output: 2500.00000;
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500;
// Example 2:

// Input: salary = [1000, 2000, 3000];
// Output: 2000.00000;
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2

function average(salary) {
    let sortedSalaries = salary.sort();
    let total = 0;
    let avgSal;

    for(let i = 1; i< salary.length - 1; i++){

        total += salary[i];
        avgSal = total/i
    }
    return avgSal;
}
