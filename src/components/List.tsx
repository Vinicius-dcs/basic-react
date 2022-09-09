type Props = {
    data: {
        name: string;
        age: number;
    }
    key: number;
}

export const List = ({ data }: Props) => {
    return (
        <li>{data.name} - {data.age} Anos</li>
    )
}