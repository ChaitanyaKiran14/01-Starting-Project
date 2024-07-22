import CourseGoal from "../CourseGoal";
type GoalListProps = {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
};



const GoalList  = ({goals} : GoalListProps) => {
    return (
      <ul>
        {goals.map((each) => (
          <CourseGoal
            key={each.id}
            title={each.title}
            description={each.description}
          />
        ))}
      </ul>
    );

}

export default GoalList









//  <ul>
//    <CourseGoal
//      key={each.id}
//      title={each.title}
//      description={each.description}
//    />
//  </ul>;