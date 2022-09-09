import { useState } from 'react';

function App() {

	const [show, setShow] = useState(false);
	const [buttonText, setButtonText] = useState('Mostrar');

	const toggleDiv = () => {
		show === true ? setShow(false) : setShow(true);
		toggleTextButton();
	}

	const toggleTextButton = () => {
		buttonText === 'Mostrar' ? setButtonText('Esconder') : setButtonText('Mostrar');
	}

	return (
		<div>
			<button onClick={toggleDiv}>{buttonText}</button>

			{show === true &&
				<div>
					Olha a DIV!
				</div>
			}
		</div>
	);
}

export default App;