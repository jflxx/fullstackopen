
const Total = ({parts}) => {
   return(<b>total of exercises {parts.reduce((acum,crs) => {
    return acum + crs.exercises
   },0)}</b>)
};

export default Total;