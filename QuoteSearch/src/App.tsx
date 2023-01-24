import { useState, useEffect } from 'react';
import './App.css'

interface Quote {
	id: number;
	quote: string;
	speaker: string;
}

function App() {
	const [quote, setQuote] = useState<Quote[]>([]);
	const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
	
	useEffect(() => {
		loadRandomQuote()
	}, []);

	async function loadRandomQuote() {
		const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
		const quote = await result.json();
		console.log(quote);
		setRandomQuote(quote);
	}

	return (
		<div className="App">
			<div className="header">
				<h1>Quote Search</h1>
				<form>
					<input type="text" id="speaker"></input>
				</form>
			</div>
			<div className="results">
				<p className="randQuote">"{if (randomQuote != null) {randomQuote.content}}"</p>
				<p className="randAuthor">-{randomQuote.author}</p>
			</div>
		</div>
	)
}

export default App
