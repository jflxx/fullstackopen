import Part from './Part';

const Content = (props) => (
  <p>
    {props.parts.map(part => <Part key={part.id} part={part} />)}
  </p>
)

export default Content;