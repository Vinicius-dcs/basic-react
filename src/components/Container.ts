import styled from 'styled-components';

type ContainerProps = {
    color: string;
}

export const Container = styled.div<ContainerProps>`
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

`;