import { useEffect, useState } from 'react';

function App() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [fullName, setFullName]= useState('');

	useEffect(() => {
		setFullName(name + ' ' + lastName)
	}, [name, lastName])

	return (
		<div className="flex flex-col">
			<input type="text" placeholder="Digite seu NOME" value={name} onChange={(event) => setName(event.target.value)}/>
			<input type="text" placeholder="Digite seu SOBRENOME" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
			<p>Nome Completo: {fullName}</p>
		</div>
	);

}

export default App;