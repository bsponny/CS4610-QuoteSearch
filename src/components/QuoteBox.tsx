import { ReactNode } from "react";
import "../index.css";

export const QuoteBox = ({quote, author}) => {
	return (
		<div className="quoteBox">
			<p>{quote}</p>
			<p>-{author}</p>
		</div>
	);
}
