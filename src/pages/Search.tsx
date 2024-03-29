import { useState, useEffect } from 'react';
import '../index.css';
import { QuoteBox } from '../components/QuoteBox';

interface Quote {
	id: number;
	quote: string;
	author: string;
}

export const Search = (author: any) => {
	const [quotes, setQuotes] = useState<Quote[]>([]);

	useEffect(() => {
		searchQuotes(author);
	}, []);

	async function searchQuotes(author: any){
		const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query=" + author.author);
		const quotesJson = await result.json();
		const quotes = quotesJson.results;
		const quoteList = [];
		for (let i = 0; i < quotes.length; i++){
			if (quotes[i].author === ""){
				quotes[i].author = "";
			}
			const quote: Quote = {
				id: quotes[i]._id,
				quote: quotes[i].content,
				author: quotes[i].author,
			}
			quoteList.push(quote);
		}
		setQuotes(quoteList);
	}

	return (
		<div className="results">
			{
				quotes.map((quote) => (
					<QuoteBox key={quote.id} quote={quote.quote} author={quote.author} />
				))
			}
		</div>
	);
}
