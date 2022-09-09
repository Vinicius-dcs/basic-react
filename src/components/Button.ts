import styled from 'styled-components';

type ButtonProps = {
    color: string;
    small?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-size: ${(props) => props.small ? '15px' : '30px'};
    background-color: ${(props) => props.color}
`;