
const Positive = ({text,good,neutral,bad}) => {
    return (
        <p>{text} {good/(good+neutral+bad)*100} %</p>
    );

}

export default Positive;