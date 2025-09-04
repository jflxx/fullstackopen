
const Total = ({parts}) => {
   return(<b>total of {parts.reduce((acum,crs) => {
    return acum + crs.exercises
   },0)} exercises</b>)
};

export default Total;