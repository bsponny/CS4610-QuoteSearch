import { useState, useEffect } from 'react';
import '../App.css';

export const RandomQuote = () => {
	const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
	
	useEffect(() => {
		loadRandomQuote()
	}, []);

	async function loadRandomQuote() {
		const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
		const quote = await result.json();
		if (quote.author === "") {
			quote.author = "Unknown"
		}
		setRandomQuote(quote);
	}

	return (
		<div className="results">
			{randomQuote && <p className="randQuote">"{randomQuote.content}"</p>}
			{randomQuote && <p className="randAuthor">-{randomQuote.author}</p>}
		</div>
	);
}
