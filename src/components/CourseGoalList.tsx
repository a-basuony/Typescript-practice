import CourseGoal from "./CourseGoal";
import { CourseGoals as CGouls } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalsListProps = {
  goals: CGouls[];
  deleteHandler: (id: number) => void;
};

function CourseGoalList({ goals, deleteHandler }: CourseGoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="Warning">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="hint">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              id={goal.id}
              onDelete={deleteHandler}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;
