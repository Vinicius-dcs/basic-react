import { useState } from 'react';

function App() {

	const [padding, setPadding] = useState(0);

	const handleClick = () => {
		setPadding(20)
	}

	return (
		<div>
			<button style={{backgroundColor: '#FF0000', color: '#FFF', padding}} onClick={handleClick}>Clique aqui</button>
		</div>
	);

}

export default App;