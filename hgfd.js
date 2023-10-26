// q7.How to clone an array in JavaScript?
let myArray = new Array(10);
myArray.fill(7650,4,4);
console.log(myArray);

// Q8.How to fill an array with given value in JavaScript?
let ytr = [5, 7, 5, 3, 6, 3];
let arr = ytr.some((r) => {
    return r == 10;
})
console.log(arr)

// Q9:How to modify an object’s property in an array of objects in JavaScript ?
let employees_data = [
	{
		employee_id: 1,
		employee_name: "Aman",
	},
	{
		employee_id: 2,
		employee_name: "Bhargava",
	},
	{
		employee_id: 3,
		employee_name: "Chaitanya",
	},
];

const modifiedEmployees = employees_data.map((obj) => {
	if (obj.employee_id === 3) {
		return { ...obj, employee_name: "rahul" };
	}
	return obj;
});

console.log(modifiedEmployees);
