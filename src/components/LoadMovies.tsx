import { Spinner } from '@chakra-ui/react';

export const LoadMovies = () => {
    return (
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
    )
}