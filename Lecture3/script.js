console.log('script.js');

//Objects
const topHat = {
	color: "black",
	size: 10,
	type: "Top Hat"
};

const baseballCap = {
	color: "white",
	size: 7,
	type: "baseball cap"
};

const fedora = {
	color: "purple",
	size: 21,
	type: "Fedora"
};

const stetson = {
	color: "black",
	size: "ten gallon",
	type: "Cowboy Hat"
};

let hatsArray = [topHat, baseballCap, fedora, stetson];

let findTheBlackHats = (arrayOfHats) => {
	let blackHats = [];
	for (var i = 0; i < arrayOfHats.length; i++) {
		if(arrayOfHats[i].color === "black"){
			blackHats.push(arrayOfHats[i]);
		}
	}
	return blackHats;
}

//Object constructors to make hats
// function hat(type, color, size) {
// 	this.type = type;
// 	this.color = color;
// 	this.size = size;
// }

let hat = (type, color, size) => {
	console.log(self);
}

// const funnyHat = new hat("bennie", "rainbow", 10);
// const ushanka = new hat("ushanka", "brown", 12);

console.log('What is the color of the top hat?', topHat.color);
console.log('The black hats array is:', findTheBlackHats(hatsArray));