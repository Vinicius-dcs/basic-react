import { useState } from 'react';
import { Button } from './components/Button';

function App() {

	const [padding, setPadding] = useState(0);

	return (
		<div>
			<Button/>
		</div>
	);

}

export default App;