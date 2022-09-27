import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            Página Sobre
            <ul>
                <li><Link to="/sobre/vinicius">Vinicius</Link></li>
                <li><Link to="/sobre/costa">Costa</Link></li>
            </ul>
        </div>
    );
}