import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import RouteScheduleTables from "../../src/components/dashboard/ProjectTable";

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <RouteScheduleTables />
      </Col>
    </Row>
  );
};

export default Tables;
