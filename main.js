/*  Mixed Messages - Portfolio Project
    Author: Alek Howland

    CodeAcademy Project
*/

let data = {
	_greetings: [["Good Morning"], ["Good Afternoon"], ["Good Evening"]],
	_quotes: [
		[
			"“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle",
		],
		[
			"“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
		],
		[
			"“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah",
		],
	],
	_farewells: [["Good-bye."], ["See you soon."], ["See you then."]],
	_types: ["Motivational", "Entrepreneurs", "Hustle"],
	get greeting() {
		let date = new Date();
		let hour = date.getHours();

		let rndIndex = 0;

		if (hour < 12) {
			rndIndex = Math.floor(Math.random() * this._greetings[0].length);
			return this._greetings[0][rndIndex];
		} else if (hour > 12 && hour < 19) {
			rndIndex = Math.floor(Math.random() * this._greetings[1].length);
			return this._greetings[1][rndIndex];
		} else {
			rndIndex = Math.floor(Math.random() * this._greetings[2].length);
			return this._greetings[2][rndIndex];
		}
	},
	get type() {
		let rndIndex = Math.floor(Math.random() * this._types.length);
		return this._types[rndIndex];
	},
	get quote() {
		let type = this.type;
		let rndIndex = 0;

		switch (type) {
			case "Motivational":
				rndIndex = Math.floor(Math.random() * this._greetings[0].length);
				return this._quotes[0][rndIndex];
				break;
			case "Entrepreneurs":
				rndIndex = Math.floor(Math.random() * this._greetings[1].length);
				return this._quotes[1][rndIndex];
				break;
			case "Hustle":
				rndIndex = Math.floor(Math.random() * this._greetings[2].length);
				return this._quotes[2][rndIndex];
				break;
			default:
				return "Oops we ran out of quotes";
				break;
		}
	},
	get farewell() {
		let date = new Date();
		let hour = date.getHours();

		let rndIndex = 0;

		if (hour < 12) {
			rndIndex = Math.floor(Math.random() * this._farewells[0].length);
			return this._farewells[0][rndIndex];
		} else if (hour > 12 && hour < 19) {
			rndIndex = Math.floor(Math.random() * this._farewells[1].length);
			return this._farewells[1][rndIndex];
		} else {
			rndIndex = Math.floor(Math.random() * this._farewells[2].length);
			return this._farewells[2][rndIndex];
		}
	},
	createQuote() {
		let greeting = this.greeting;
		let quote = this.quote;
		let farewell = this.farewell;

		return `${greeting}, your quote:\n${quote}\n${farewell}`;
	},
};

console.log(data.createQuote());
