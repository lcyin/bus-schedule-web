import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const RouteHome = ({ routeData }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Search Bus Route</CardTitle>

        <ListGroup flush className="mt-4 ">
          {routeData.map((route) => (
            <ListGroupItem
              key={route.id}
              action
              href={`/route/${route.route}`}
              tag="a"
              className="d-flex align-items-center p-3 border-0 hstack gap-3"
            >
              <div>{route.route}</div>
              <div>To: {route.dest_tc}</div>
              <div className="ms-auto text-muted text-small">{route.date}</div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default RouteHome;
