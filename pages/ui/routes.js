import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import RouteTables from "../../src/components/dashboard/ProjectTable";

const Routes = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <RouteTables />
      </Col>
    </Row>
  );
};

export default Routes;
