import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import CollapseItem from "./CollapseItem";

const RouteScheduleTables = ({ routeData }) => {
  const [activeItem, setActiveItem] = useState(null);
  const clickEvent = (e) => {
    setActiveItem(e);
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{routeData.route}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          To: {routeData.dest_tc}
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="" borderless>
            <thead>
              <tr>
                <th>Station</th>
                {/* <th>Fee</th> */}
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {routeData.routeStops.map((tdata, index) => (
                <CollapseItem
                  activeItem={activeItem}
                  clickEvent={clickEvent}
                  data={tdata}
                  key={index}
                  index={index}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default RouteScheduleTables;
