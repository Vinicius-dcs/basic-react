type Props = {
    text: string;
    clickFn: (text: string) => void;
}

export const Button = ({ text, clickFn }: Props) => {

    const buttonEvent = () => {
        clickFn("Teste");
    }

    return (
        <button onClick={buttonEvent}>
            {text}
        </button>
    )
}