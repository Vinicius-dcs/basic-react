import styled from 'styled-components';

type ContainerProps = {
    color: string;
}

export const Container = styled.div<ContainerProps>`

    max-width: 600px;
    margin: auto;
    display: flex;

    background-color: ${(props) => props.color};
    color: white;
    padding: 20px;

    span {
        font-weight: bold;
        color: green;
    }

    .link {
        color: #FFF;
    }

    .link:hover {
        color: #00FF00;
    }

    @media (max-width: 500px) {
        background-color: green;
        flex-direction: column;
    }

`;