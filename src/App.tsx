import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { AboutItem } from './pages/AboutItem';
import { NotFound } from './pages/NotFound';

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
					<Route path="/sobre/:slug" element={<AboutItem />} />
					<Route path="*" element={<NotFound />} />
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