import React from "react";
import dateFormat from "dateformat";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const DishDetailComponent = ({ selectedDish }) => {
  if (selectedDish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={selectedDish.image}
                alt={selectedDish.name}
              />
              <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {selectedDish.comments.map((dish) => (
              <div key={dish.id}>
                <p>{dish.comment}</p>
                <p>
                  {`-- ${dish.author}, ${dateFormat(
                    new Date(dish.date),
                    "mmm dS, yyyy"
                  )}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetailComponent;
