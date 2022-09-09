import { useState } from 'react';

function App() {

	const [number, setNumber] = useState(0)

	const sumCount = () => {
		setNumber(number + 1)
	}

	const decreaseCount = () => {
		setNumber(number - 1)
	}

	return (
		<div>
			<button onClick={sumCount}>+</button>
			<hr />
			{number}
			<hr />
			<button onClick={decreaseCount}>-</button>
		</div>
	);
}

export default App;