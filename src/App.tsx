import { usePeopleList } from './hooks/reducers/peopleList';
import { useState } from 'react';

function App() {
	const [list, dispatch] = usePeopleList();
	const [person, setPerson] = useState('');

	const handleAddButton = () => {
		if (person) {
			dispatch({
				type: 'ADD',
				payload: {
					name: person
				}
			});
		}

		setPerson('');
	}

	const deletePerson = (id: string) => {
		dispatch({
			type: 'DEL',
			payload: { id }
		});
	}

	const handleOrderButton = () => {
		dispatch({
			type: 'ORDER'
		})
	}

	return (
		<div className="p-5">

			<input type="text" value={person} onChange={(event) => { setPerson(event.target.value) }} className="border-2" />
			<button className="p-1 bg-blue-500 m-1 rounded" onClick={handleAddButton}>Adicionar</button>
			<button className="p-1 bg-blue-500 m-1 rounded" onClick={handleOrderButton}>Ordenar</button>

			<hr />

			Lista de Pessoas:
			<ul>
				{list.map((item, index) => (
					<li
						key={index}>{item.name}
						<button onClick={() => deletePerson(item.id)}> [Deletar] </button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App;