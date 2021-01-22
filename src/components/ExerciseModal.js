import React from 'react';
import EditExerciseForm from './EditExerciseForm';

export default function ExerciseModal(props) {
  return(
    <div className={props.modalIsOpen ? "modal is-active" : "modal"}>
      <div
        className="modal-background"
        onClick={props.closeModal}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.targetedExercise.name}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.closeModal}
          ></button>
        </header>

        {props.isEditing ? (
          <EditExerciseForm
            setTargetedExercise={props.setTargetedExercise}
            targetedExercise={props.targetedExercise}
            removeExercise={props.removeExercise}
            saveExercise={props.saveExercise}
            setIsEditing={props.setIsEditing}
            exercise={props.exercise}
          />
        ) : (
          <>
            <section className="modal-card-body section">
              <p className="content has-text-weight-medium">Name: <span className="box">{props.targetedExercise.name}</span></p>
              <p className="content has-text-weight-medium">Weight: <span className="box">{props.targetedExercise.weight}</span></p>
              <p className="content has-text-weight-medium">Reps: <span className="box">{props.targetedExercise.reps}</span></p>
              <p className="content has-text-weight-medium">Additional details: <span className="box">{props.targetedExercise.comments}</span></p>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-white"
                onClick={() => props.setIsEditing(true)}
              >Edit
              </button>

              <button
                className="button is-danger"
                onClick={props.removeExercise}
              >Remove
              </button>
            </footer>
          </>
        )}
    
      </div>
    </div>
  );
}
