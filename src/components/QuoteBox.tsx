import { ReactNode } from "react";
import "../index.css";

type QuoteBoxProps = {
	quote: string;
	author: string;
}

export const QuoteBox = (props: { quote: any; author: any; }) => {
	const {quote, author} = props;
	return (
		<div className="quoteBox">
			<p>{quote}</p>
			<p>-{author}</p>
		</div>
	);
}
