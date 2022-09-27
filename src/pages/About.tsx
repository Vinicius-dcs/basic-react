import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            Página Sobre
            <ul>
                <li><Link to="/sobre/vinicius">Vinicius</Link></li>
                <li><Link to="/sobre/costa">Costa</Link></li>

                {/* A vantagem de utilizar o link do react é que o componente Link não recarrega a página toda e sim somente o que deve ser renderizado, diferente do <a href> do html, que recarrega a página inteira. */}
            </ul>
        </div>
    );
}