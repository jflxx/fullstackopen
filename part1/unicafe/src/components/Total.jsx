

const Total = ({text,good,neutral,bad}) => {
    return (
        <p>{text} {good+neutral+bad}</p>
    );
}

export default Total;