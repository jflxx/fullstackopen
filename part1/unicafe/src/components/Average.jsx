

const Average = ({text,good,neutral,bad}) => {
    return (
    <p>{"average"} {(good-bad)/(good+neutral+bad)}</p>
    );
}

export default Average;