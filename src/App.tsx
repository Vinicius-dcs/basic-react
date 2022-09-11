function App() {

	return (
		<div className="bg-blue-300 p-5">
			<input type="text" placeholder="Digite algo" className="border outline-none border-transparent bg-white p-3 rounded focus:ring-1 focus:ring-blue-700"/>
			
			<button className="ml-2 p-3 bg-blue-400 rounded text-white font-bold hover:bg-blue-500">Botão</button>
			<button className="ml-2 p-3 bg-blue-400 rounded text-white font-bold disabled:opacity-50" disabled>Botão</button>
		</div>

	);

}

export default App;