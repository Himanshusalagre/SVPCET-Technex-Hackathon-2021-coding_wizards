import React from 'react';

export default function DaySelectContainer(props) {
  return (
    <div className="tabs is-centered is-fullwidth is-boxed">
      <ul>
        {props.daysOfWeekList.map( (dayOfWeekListItem, index) => (
          <li
            key={index}
            className={props.dayOfWeek === dayOfWeekListItem ? "is-active" : null}
            onClick={() => props.setDayOfWeek(dayOfWeekListItem)}
          >
            <a>{dayOfWeekListItem}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}