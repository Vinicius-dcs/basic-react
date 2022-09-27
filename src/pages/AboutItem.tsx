import { useParams, useNavigate } from 'react-router-dom';

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    const handleHomeButton = () => {
        navigate('/');
    }

    return (
        <div>
            Página Sobre {params.slug}
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
            <br />
            <button onClick={handleHomeButton}>Home</button>
        </div>
    );
}