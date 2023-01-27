import { useState, useEffect } from 'react';
import '../index.css';

interface Quote {
	id: number;
	quote: string;
	author: string;
}

export const RandomQuote = () => {
	const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
	
	useEffect(() => {
		loadRandomQuote()
	}, []);

	async function loadRandomQuote() {
		const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
		const quoteJson = await result.json();
		if (quoteJson.author === "") {
			quoteJson.author = "Unknown"
		}
		const quote: Quote = {
			id: quoteJson._id,
			quote: quoteJson.content,
			author: quoteJson.author,
		}
		setRandomQuote(quote);
	}

	return (
		<div className="results">
			{randomQuote && <p className="randQuote">"{randomQuote.quote}"</p>}
			{randomQuote && <p className="randAuthor">-{randomQuote.author}</p>}
		</div>
	);
}
