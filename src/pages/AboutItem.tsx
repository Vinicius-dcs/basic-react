import { useParams } from 'react-router-dom';

export const AboutItem = () => {
    const params = useParams();

    return (
        <div>
            Página Sobre {params.slug}
        </div>
    );
}