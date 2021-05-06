/*  Mixed Messages - Portfolio Project
    Author: Alek Howland

    CodeAcademy Project
*/

let data = {
	_greetings: [["Good Morning"], ["Good Afternoon"], ["Good Evening"]],
	_quotes: [
		[
			"“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle",
			"“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.” – Sheryl Sandberg",
			"“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.” – Marissa Mayer",
			"“If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.” – Vincent Van Gogh",
			"“How wonderful it is that nobody need wait a single moment before starting to improve the world.” – Anne Frank",
			"“Some people want it to happen, some wish it would happen, others make it happen.” – Michael Jordan",
			"“It’s not the load that breaks you down, it’s the way you carry it.” – Lou Holtz",
		],
		[
			"“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
			"“The secret of getting ahead is getting started.” – Mark Twain",
			"“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
			"“Only the paranoid survive.” – Andy Grove",
			"“It’s hard to beat a person who never gives up.” – Babe Ruth",
			"“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz",
			"“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon",
		],
		[
			"“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah",
			"“Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln",
			"“Everything comes to him who hustles while he waits.”― Thomas Edison",
			"“Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.” ― K’wan",
			"“Invest in your dreams. Grind now. Shine later.” – Unknown",
			"“Hustlers don’t sleep, they nap.” – Unknown",
			"“Work like there is someone working twenty four hours a day to take it away from you.” – Mark Cuban",
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
				rndIndex = Math.floor(Math.random() * this._quotes[0].length);
				return this._quotes[0][rndIndex];
				break;
			case "Entrepreneurs":
				rndIndex = Math.floor(Math.random() * this._quotes[1].length);
				return this._quotes[1][rndIndex];
				break;
			case "Hustle":
				rndIndex = Math.floor(Math.random() * this._quotes[2].length);
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
