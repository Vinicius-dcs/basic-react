import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { AboutVinicius } from './pages/AboutVinicius';
import { AboutCosta } from './pages/AboutCosta';

function App() {
	return (
		<div className="p-4">
			<header>
				<h1>Título do Site</h1>
			</header>

			<hr />

			<div className="py-4">
				<Routes>
					<Route path="/" element={<Home />} />
					
					<Route path="/sobre" element={<About />} />
					<Route path="/sobre/vinicius" element={<AboutVinicius />} />
					<Route path="/sobre/Costa" element={<AboutCosta />} />
				</Routes>
			</div>

			<hr />

			<footer>
				Todos os direitos reservados.
			</footer>

		</div>
	);
}

export default App;