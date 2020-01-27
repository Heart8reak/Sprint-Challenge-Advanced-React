import React from 'react';

import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const PlayerCard = props => {
  return (
    <div>
      {/* {props.name}
      {props.country}
      {props.searches} */}

      <Card>
        <CardHeader className="text-muted" tag="h3">
          {props.name}
        </CardHeader>
        <CardBody>
          <CardTitle className="text-muted">{props.country}</CardTitle>
          <CardText className="text-muted"></CardText>
        </CardBody>
        <CardFooter className="text-muted">
          Total Searches: {props.searches}
        </CardFooter>
      </Card>
      <br />
    </div>
  );
};

export default PlayerCard;
