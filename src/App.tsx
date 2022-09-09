import { useState } from 'react';

function App() {

	const [name, setName] = useState('...');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('...');

	return (

		<div>

			<label> Nome: </label>
			<input type="text" onChange={(event) => {setName(event.target.value)}}></input>

			<label> Sobrenome: </label>
			<input type="text" onChange={(event) => {setLastName(event.target.value)}}></input>

			<label> Idade: </label>
			<input type="number" onChange={(event) => {setAge(event.target.value)}}></input>

			<hr />

			<p>Seu nome é {name} {lastName} e você tem {age} anos.</p>

		</div>
	);
}

export default App;