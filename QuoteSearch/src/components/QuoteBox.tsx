import { ReactNode } from "react";
import "../App.css";

export const QuoteBox = ({quote, author}) => {
	return (
		<div className="quoteBox">
			<p>{quote}</p>
			<p>-{author}</p>
		</div>
	);
}
