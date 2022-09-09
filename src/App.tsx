import { Header } from './components/Header';
import { Photo } from './components/Photo';

function App() {

	return (
		<div>
			<Header title="Este é um exemplo" />
			<Header title="Outro texto" />

			Olá Mundo!

			{/* Children ocorre quando tenho um componente criado por mim que não abre e fecha nele mesmo (<Photo />) e sim quando dentro dele existem outros elementos (<Photo> <img /> </Photo>) */}

			<Photo legend="Google">
				<img src="http://www.google.com.br/google.jpg"/> {/* Children */}
			</Photo>
		</div>
	);
}

export default App;