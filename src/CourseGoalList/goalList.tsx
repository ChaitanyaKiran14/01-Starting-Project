import CourseGoal from "../CourseGoal";
import { type OwnGoal } from "../Input2";  //used that type decorator to avoid conflicts late
type GoalListProps = {
  goals: {
    goalTitle: string;
    goalDescription: string;
    id: number;
  }[];
};



const GoalList  = ({goals} : GoalListProps) => {
    return (
      <ul>
        {goals.map((each) => (
          <CourseGoal
            key={each.id}
            title={each.goalTitle}
            description={each.goalDescription}
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