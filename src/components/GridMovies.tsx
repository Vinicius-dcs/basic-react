import { Movie } from '../types/Movie';

type Props = {
    data: Movie[];
}

export const GridMovies = ({data}: Props) => {
    return (
        <>
            Total de Filmes: {data.length}
            <div className="grid grid-cols-6 gap-3">
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.avatar} alt="" className="w-32 block" />
                        {item.titulo}
                    </div>
                ))}
            </div>
        </>
    )
}