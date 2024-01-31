import Header from "./components/Header";
import CourseImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoals = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const addGoalsHandler = (goal: string, summary: string) => {
    const newGoal: CourseGoals = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <main>
        <Header img={{ src: CourseImg, alt: "list of goals" }}>
          <h1>Your Course Goal</h1>
        </Header>
        <NewGoal onAddGoal={addGoalsHandler} />
        {/* <button onClick={addGoalsHandler} className="add_button">
          Add Course Goal
        </button> */}
        <CourseGoalList goals={goals} deleteHandler={deleteGoalHandler} />
      </main>
    </>
  );
}

export default App;
