import { useState, useEffect, ChangeEvent } from 'react';
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
							onKeyPress={(e) => {
								if (e.key === "Enter"){
									setPageName("search");
									setContClass("");
									e.preventDefault();
								}
							}
							}
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
