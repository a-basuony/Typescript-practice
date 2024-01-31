import CourseGoal from "./CourseGoal";
import { CourseGoals as CGouls } from "../App";

type CourseGoalsListProps = {
  goals: CGouls[];
  deleteHandler: (id: number) => void;
};

function CourseGoalList({ goals, deleteHandler }: CourseGoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelete={deleteHandler}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
      .
    </ul>
  );
}

export default CourseGoalList;
