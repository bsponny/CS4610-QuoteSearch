import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface Quote {
	id: number;
	quote: string;
	speaker: string;
}

function App() {
	return (
		<div className="App">
			<div class="header">
				<h1>Quote Search</h1>
				<input type="text" id="speaker"></input>
				<button>Search</button>
			</div>
			<div>
				<p class="randQuote">Random Quote</p>
			</div>
		</div>
	)
}

export default App
