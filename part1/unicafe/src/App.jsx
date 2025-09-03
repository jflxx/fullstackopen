import { useState } from "react";
import ButtonSetValue from "./components/ButtonSetValue";
import Average from "./components/Average";
import Positive from "./components/Positive";
import Total from "./components/Total";
import Counter from "./components/Counter";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <ButtonSetValue Setter={setGood} value={good} text="good" />
      <ButtonSetValue Setter={setNeutral} value={neutral} text="neutral" />
      <ButtonSetValue Setter={setBad} value={bad} text="bad" />

      <h1>statistics</h1>
      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <Counter text="good" value={good} />
          <Counter text="neutral" value={neutral} />
          <Counter text="bad" value={bad} />
          <Total text="all" good={good} neutral={neutral} bad={bad} />
          <Average text="average" good={good} neutral={neutral} bad={bad} />
          <Positive text="positive" good={good} neutral={neutral} bad={bad} />
        </>
      )}
    </>
  );
};

export default App;
