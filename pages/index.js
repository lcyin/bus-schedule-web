import Head from "next/head";
import { Col, Row } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3088/api/v1/bus-route/routes/all");
  const data = await res.json();
  return {
    props: {
      routeData: data,
    },
  };
};

export default function Home({ routeData }) {
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
            <Card>
              <CardBody>
                <CardTitle tag="h5">Search Bus Route</CardTitle>

                <ListGroup flush className="mt-4 ">
                  {routeData.map((route) => (
                    <ListGroupItem
                      key={route.id}
                      action
                      href={`/route/${route.route}/${route.bound}`}
                      tag="a"
                      className="d-flex align-items-center p-3 border-0 hstack gap-3"
                    >
                      <div>{route.route}</div>
                      <div>To: {route.dest_tc}</div>
                      <div className="ms-auto text-muted text-small">
                        {route.date}
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
}
