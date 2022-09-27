import { Link, useSearchParams } from 'react-router-dom';

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }

    return (
        <div>
            Filtro: {searchParams.get('filter')}
            <br />
            Ordem: {searchParams.get('order')}

            <hr />
            <button onClick={()=>setOrder('asc')}>Asc</button>
            <br />
            <button onClick={()=>setOrder('desc')}>Desc</button>
            <hr />

            Página Sobre
            <ul>
                <li><Link to="/sobre/vinicius">Vinicius</Link></li>
                <li><Link to="/sobre/costa">Costa</Link></li>

                {/* A vantagem de utilizar o link do react é que o componente Link não recarrega a página toda e sim somente o que deve ser renderizado, diferente do <a href> do html, que recarrega a página inteira. */}
            </ul>
        </div>
    );
}