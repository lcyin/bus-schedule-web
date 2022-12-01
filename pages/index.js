import Head from "next/head";
import { Col, Row } from "reactstrap";
import RouteHome from "../src/components/dashboard/RouteHome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KMB Bus Schedule</title>
        <meta
          name="description"
          content="Ample Admin Next Js Free Aadmin Dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Row>
          <Col sm="12" lg="12">
            <RouteHome />
          </Col>
        </Row>
      </div>
    </div>
  );
}
