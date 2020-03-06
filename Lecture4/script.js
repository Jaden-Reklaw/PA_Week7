/*
	input --> function --> output
	
	function declaration
	function addTwo (number) {
		return number + 2;
	}

	call function
	let value = addTwo(2);
	console.log(value);

	Example:
	Array of Boxes
	boxes - size, color
	function to total the size of all red boxes

	let arrayOfBoxes = [
		{size: 3, color: "blue"},
		{size: 4, color: "red"},
		{size: 7, color: "blue"},
		{size: 5, color: "red"},
		{size: 1, color: "green"},
	];

	function totalSizeOfRedBoxes(array) {
		let total = 0;
		for(let box of array) {
			if(box.color === "red") {
				total += box.size;
			}
		}
		return total;
	}
*/
let arrayOfBoxes = [
		{size: 3, color: "blue"},
		{size: 4, color: "red"},
		{size: 7, color: "blue"},
		{size: 5, color: "red"},
		{size: 1, color: "green"},
	];

	function totalSizeOfRedBoxes(array) {
		let total = 0;
		for(let box of array) {
			if(box.color === "red") {
				total += box.size;
			}
		}
		return total;
	}

	console.log(totalSizeOfRedBoxes(arrayOfBoxes));









