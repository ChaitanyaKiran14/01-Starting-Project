//const CourseGoal = ({title, description} : {
  //title :string, description : string    //this is a bit hard to read so what we do is we define a custom type so that we can use it whenever we want
//}) => {


type CourseProps  = {
  title : string;
  description : string;

}
const CourseGoal = ({title, description}: CourseProps) => {

  return (
      <div>

         <h1>{title}</h1>
         <p>{description}</p>
      </div>
  )
}

export default CourseGoal