import { Button } from './components/Button';

function App() {

	const buttonAcion = (text: string) => {

		// Comunicação Filho > Pai (via parâmetro)
		alert("Frase vindo por parâmetro do elemento filho: " + text)
	}

	// Comunicação Pai > Filho (via Props)
	return (
		<div>
			<Button text="Frase vindo do elemento pai (App.tsx) via props" clickFn={buttonAcion} />
		</div>
	);
}

export default App;