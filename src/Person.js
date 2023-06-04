import React from 'react';

function Name(props) {
  return (
    <div>
      <li>{props.name} : {props.number}</li>
      <button>delete</button>
      </div>
  )
}

export default Name;