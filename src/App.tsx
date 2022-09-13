import { useContagem } from './hooks/reducers/contagem';

function App() {
	const [state, dispatch] = useContagem();

	return (
		<div className="p-5">
			Contagem: {state.count}

			<hr />

			<button className="p-2 bg-blue-400 m-3 rounded" onClick={() => dispatch({type: 'ADD'})}>Adicionar</button>
			<button className="p-2 bg-blue-400 m-3 rounded" onClick={() => dispatch({type: 'DEL'})}>Remover</button>
			<button className="p-2 bg-blue-400 m-3 rounded" onClick={() => dispatch({type: 'RESET'})}>Resetar</button>

		</div>
	)
}

export default App;