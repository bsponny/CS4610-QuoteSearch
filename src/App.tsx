import { useState, useEffect, ChangeEvent, KeyDownEvent } from 'react';
import './index.css';
import { RandomQuote } from './pages/RandomQuote';
import { Search } from './pages/Search';

function App() {
	const [pageName, setPageName] = useState("random");
	const [searchQuery, setSearchQuery] = useState("");
	const [contClass, setContClass] = useState("randContainer");

	function handleChange(e: ChangeEvent<HTMLInputElement>){
		setSearchQuery(e.target.value);
		if (e.target.value === ""){
			setPageName("random");
			setContClass("randContainer");
		}
	}

	function handleKeyDown(e: KeyDownEvent<HTMLInputElement>){
		if (e.key === "Enter"){
			setPageName("search");
			setContClass("");
			e.preventDefault();
		}
	}

	return (
		<div className="container">
			<div className={contClass}>
				<div className="header">
					<h1>Quote Search</h1>
					<form>
						<input 
							type="text" 
							value={searchQuery}
							placeholder="Albert Einstein"
							onChange={handleChange}
							onKeyDown={handleKeyDown}
						></input>
					</form>
				</div>
				{pageName === "random" && <RandomQuote />}
				{pageName === "search" && <Search author={searchQuery} />}
			</div>
		</div>
	);
}

export default App
