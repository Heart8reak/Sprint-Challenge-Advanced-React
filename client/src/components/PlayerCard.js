import React from 'react';

const PlayerCard = props => {
  return (
    <div>
      {props.name}
      {props.country}
      {props.searches}
    </div>
  );
};

export default PlayerCard;
