//const CourseGoal = ({title, description} : {
//title :string, description : string    //this is a bit hard to read so what we do is we define a custom type so that we can use it whenever we want
//}) => {

import { FC } from "react";

// type CourseProps  = {
//   title : string;
//   description : string;

// }  we can either  ue type or interface

interface CourseProps {
  title: string;
  description: string;
}

// const CourseGoal = ({ title, description }: CourseProps) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default CourseGoal;

const CourseGoal: FC<CourseProps> = ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CourseGoal;
