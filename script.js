// random number wrapper
function randInt(max){
	return Math.floor(Math.random() * max);
}
// take input
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
// ask the user for something to work with
const userPrompt = "What are you anxious about? What do you fear? Please phrase your answer in this format: 'My job will keep getting worse and I'll be too afraid to leave'\n\n\n";
// convert first person statements to second person
function firstToSecondPerson(phrase){
	// convert statements like "nobody will ever love me" 
	// to "nobody will ever love you"
	let conversions = {
		"i": "you",
		"i'll": "you'll",
		"i'd": "you'd",
		"i'm": "you are",
		"my": "your",
		"mine": "yours",
		"me": "you"
	};
	out = [];
	for(const word of phrase.toLowerCase().split(' ')){
		Object.keys(conversions).includes(word.toLowerCase()) ?
			out.push(conversions[word.toLowerCase()]) :
			out.push(word) ;
	}
	return out.join(' ');
}
// and really drive it home.
const clinchers = [
	' and you always will.',
	' and nobody understands.',
	" and there's no way around that."
]
// put it all together
function processAnswer(phrase){
	let first = "I'm here to tell you that ";
	let middle = firstToSecondPerson(phrase);
	let end = clinchers[randInt(clinchers.length)];
	return first + middle + end;
}
// ask for fears and feed them right back
readline.question(userPrompt, answer => {
		console.log(processAnswer(answer));
		readline.close();
	}
);
