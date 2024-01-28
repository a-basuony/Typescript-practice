import React, { FormEvent } from "react";

export default function NewGoal() {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">What goal do you want to set?</label>
        <input type="text" id="goal" name="goal" required />
      </p>
      <p>
        <label htmlFor="summary">Write summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>

      <button type="submit">Add Goal</button>
    </form>
  );
}
