import React, { useState, useEffect } from 'react';
import AddExerciseForm from './components/AddExerciseForm';
import ExerciseModal from './components/ExerciseModal';
import DaySelectContainer from './components/DaySelectContainer';
import Banner from './components/Banner';

export default function Exercise() {
  const daysOfWeekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const initialFormState = { key: '', name: '', weight: '', reps: '', comments: '', day: '' };
  const [appLoaded, setAppLoaded] = useState(false);
  const [targetedExercise, setTargetedExercise] = useState(initialFormState);
  const [exercises, setExercises] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState('Sunday');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    window.onload = setAppLoaded(true);
  }, [appLoaded]);

  function addExercise(exercise) {
    setIsEditing(false);
    exercise.key = new Date().getTime();
    setExercises([...exercises, exercise]);
  }

  function removeExercise() {
    setExercises(exercises.filter(exercise => exercise.key !== targetedExercise.key));
    closeModal();
  }

  function saveExercise() {
    setExercises(exercises.map(exercise => (exercise.key === targetedExercise.key ? targetedExercise : exercise)));
    setIsEditing(false);
  }

  function openModal(exercise) {
    setModalIsOpen(true);
    setTargetedExercise(exercise);
  }

  function closeModal() {
    setModalIsOpen(false);
    setTargetedExercise(initialFormState);
    setIsEditing(false);
  }

  return(
    <div className={appLoaded ? "app" : "app fade-out"}>
      <Banner />

      <div className="columns section has-background-white-ter">
        <AddExerciseForm 
          addExercise={addExercise}
          isEditing={isEditing}
          daysOfWeekList={daysOfWeekList}
        />

        <div className="column"></div>

        <section className="column is-three-fifths box">
          <DaySelectContainer
            dayOfWeek={dayOfWeek}
            setDayOfWeek={setDayOfWeek}
            daysOfWeekList={daysOfWeekList}
          />
          
          <div className="tags are-large">
            {exercises.map( (exercise, index) => (
              (dayOfWeek === exercise.day) ? (
                <a
                  className="tag is-link"
                  key={exercise.key}
                  onClick={() => openModal(exercise)}
                >
                  {exercise.name}
                </a>
              ) : (
                <></>
              )
            ))}

            <ExerciseModal
              setTargetedExercise={setTargetedExercise}
              targetedExercise={targetedExercise}
              removeExercise={removeExercise}
              saveExercise={saveExercise}
              setIsEditing={setIsEditing}
              isEditing={isEditing}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            />
          </div>
        </section>

      </div>
    </div>
  );
}
