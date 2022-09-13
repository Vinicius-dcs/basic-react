import { useState, useEffect } from 'react';
import { Movie } from './types/Movie';
import { useToast } from '@chakra-ui/react'
import { GridMovies } from './components/GridMovies';
import { LoadMovies } from './components/LoadMovies';
import { MoviesAPI } from './api/MoviesAPI';

function App() {

	useEffect(() => {
		loadMovies();
	}, [])

	const [movies, setMovies] = useState<Movie[]>([]);
	const [load, setLoad] = useState(true);
	const toast = useToast()

	const loadMovies = async () => {
		try {
			setMovies(await MoviesAPI.getAll());
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
			{load && <LoadMovies /> }
			{!load && <GridMovies data={movies}/> }
		</div>
	);

}

export default App;