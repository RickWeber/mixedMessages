// random number wrapper
function randInt(max){
	return Math.floor(Math.random() * max);
}

const userPrompt = "What are you anxious about? What do you fear? Please phrase your answer in this format: 'I'm afraid that my job will keep getting worse and I'll be too afraid to leave.'";

function firstToSecondPerson(phrase){
	// convert statements like "nobody will ever love me" 
	// to "nobody will ever love you"
	let conversions = {
		"i": "you",
		"my": "your",
		"mine": "yours",
		"me": "you"
	};

}
