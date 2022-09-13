import { useState, useEffect } from 'react';
import { Movie } from './types/Movie';
import { Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'

function App() {

	useEffect(() => {
		loadMovies();
	}, [])

	const [movies, setMovies] = useState<Movie[]>([]);
	const [load, setLoad] = useState(true);
	const toast = useToast()

	/* const loadMovies = () => {
		fetch('https://api.b7web.com.br/cinema')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				setMovies(json);
				setLoad(false);
			})
			.catch((error) => {
				toast({
					title: 'Falha Inesperada',
					description: `Erro ao consultar os filmes: ${error}`,
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
				setLoad(false);
			})
	} */

	const loadMovies = async () => {
		try {
			let response = await fetch('https://api.b7web.com.br/cinema/');
			let json = await response.json();

			setMovies(json);
			setLoad(false);
		} catch (error) {
			toast({
				title: 'Falha Inesperada',
				description: `Erro ao consultar os filmes: ${error}`,
				status: 'error',
				duration: 4000,
				isClosable: true,
			})
			setLoad(false);
		}
	}

	return (
		<div>
			{load &&
				<div className="flex justify-center grid">
					Carregando...
					<div className="flex justify-center mt-5">
						<Spinner
							thickness='4px'
							speed='0.65s'
							emptyColor='gray.200'
							color='blue.500'
							size='xl'
						/>
					</div>
				</div>
			}

			{!load &&
				<>
					Total de Filmes: {movies.length}
					<div className="grid grid-cols-6 gap-3">
						{movies.map((item, index) => (
							<div key={index}>
								<img src={item.avatar} alt="" className="w-32 block" />
								{item.titulo}
							</div>
						))}
					</div>
				</>
			}
		</div>
	);

}

export default App;