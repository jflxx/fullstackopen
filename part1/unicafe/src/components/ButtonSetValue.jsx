


const buttonSetValue = ({Setter,value,text}) => {
    const setToValue = (newValue) => {
        Setter(newValue);
    }
    return (
    <button onClick={() => setToValue(value + 1)}>
        {text}
    </button>
    );

}


export default buttonSetValue;