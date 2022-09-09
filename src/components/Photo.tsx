import { ReactNode } from 'react' /* Children */

type Props = {
    legend: string;
    children: ReactNode; /* Children */
}

export const Photo = ({ legend, children }: Props) => {

    {/* Exemplo fragment: esse sinal <> é o fragment, serve como elemento pai para os elementos abaixo, pois o JSX obriga a utilização de um elemento pai, ou seja, não consigo retornar 2 elementos (a não ser que sejam filhos de algo) no mesmo componente. Pra fazer isso, é utilizado o <></> */}

    return (
        <>
            {children}
            <p>{legend}</p>
        </>
    )
}