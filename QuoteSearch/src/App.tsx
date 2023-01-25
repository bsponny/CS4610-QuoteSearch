import { useState, useEffect } from 'react';
import './App.css'

interface Quote {
	id: number;
	quote: string;
	speaker: string;
}

function App() {
	const [quotes, setQuotes] = useState<Quote[]>([]);
	const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
	
	useEffect(() => {
		loadRandomQuote()
	}, []);

	async function loadRandomQuote() {
		const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
		const quote = await result.json();
		console.log(quote);
		if (quote.author === "") {
			quote.author = "Unknown"
			// unknown quote id: c487uq author is also '' 
		}
		setRandomQuote(quote);
	}

	return (
		<div className="App">
			<div className="header">
				<h1>Quote Search</h1>
				<form>
					<input 
						type="text" 
						id="speaker" 
						placeholder="Albert Einstein"
					></input>
				</form>
			</div>
			<div className="results">
				{randomQuote && <p className="randQuote">"{randomQuote.content}"</p>}
				{randomQuote && <p className="randAuthor">-{randomQuote.authorSlug}</p>}
			</div>
		</div>
	)
}

export default App
