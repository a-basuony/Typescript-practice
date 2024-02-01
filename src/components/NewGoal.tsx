import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goals = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goals.current!.value;
    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal, enteredSummary);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">What goal do you want to set?</label>
        <input type="text" id="goal" name="goal" required ref={goals} />
      </p>
      <p>
        <label htmlFor="summary">Write summary</label>
        <input type="text" id="summary" name="summary" required ref={summary} />
      </p>

      <button type="submit">Add Goal</button>
    </form>
  );
}
