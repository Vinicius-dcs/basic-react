import { Container } from './components/Container'
import { Button } from './components/Button'

function App() {

	return (
		<div>
			<Container color='black'>

				<a href="" className="link">Link Qualquer</a>

				<span>Texto do Componente</span>
				<Button color='#FF0000'> Botão maior </Button>
				<Button color='#00FF00' small> Botão menor </Button>
			</Container>
		</div>
	);

}

export default App;