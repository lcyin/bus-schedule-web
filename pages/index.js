import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../src/components/dashboard/SalesChart";
import Feeds from "../src/components/dashboard/Feeds";
import RouteScheduleTables from "../src/components/dashboard/RouteScheduleTables";
import TopCards from "../src/components/dashboard/TopCards";
import Blog from "../src/components/dashboard/Blog";
import bg1 from "../src/assets/images/bg/bg1.jpg";
import bg2 from "../src/assets/images/bg/bg2.jpg";
import bg3 from "../src/assets/images/bg/bg3.jpg";
import bg4 from "../src/assets/images/bg/bg4.jpg";

export default function Home({ busRoutes }) {
  return (
    <div>
      <Head>
        <title>Ample Admin Next Js Free Aadmin Dashboard</title>
        <meta
          name="description"
          content="Ample Admin Next Js Free Aadmin Dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Row>
          <Col sm="12" lg="12">
            <Feeds data={busRoutes} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
