const CourseGoal = ({title, description} : {
  title :string, description : string
}) => {

  return (
      <div>
         <h1>{title}</h1>
         <p>{description}</p>
      </div>
  )
}

export default CourseGoal