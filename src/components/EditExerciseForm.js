import React from 'react';

export default function EditExerciseForm(props) {

  function handleChange(e) {
    props.setTargetedExercise({ ...props.targetedExercise, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.saveExercise(props.exercise.key);
  }

  return(
    <form
      onSubmit={handleSubmit}
    >

      <section className="modal-card-body">
        <div className="field">
          <label
            className="label"
            htmlFor="name"
          >Name:
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={props.targetedExercise.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label
            className="label"
            htmlFor="weight"
          >Weight:
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="weight"
              value={props.targetedExercise.weight}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label
            className="label"
            htmlFor="reps"
          >Reps:
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="reps"
              value={props.targetedExercise.reps}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label
            className="label"
            htmlFor="comments"
          >Additional details:
          </label>
          <div className="control">
            <textarea
              className="input"
              name="comments"
              value={props.targetedExercise.comments}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="select">
          <select
            name="day"
            value={props.targetedExercise.day}
            onChange={handleChange}
            required
          >
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>
      </section>

      <footer className="modal-card-foot">
        <button
          className="button is-white"
          type="button"
          onClick={() => props.setIsEditing(false)}
        >Cancel
        </button>

        <button
          className="button is-success"
          type="submit"
          onClick={props.saveExercise}
        >Save
        </button>
      </footer>
    </form>
  );
}
