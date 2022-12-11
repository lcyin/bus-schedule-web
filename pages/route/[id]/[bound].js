import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col, Button, Table, Card, CardTitle, CardBody } from "reactstrap";
import RouteScheduleTables from "../../../src/components/dashboard/RouteScheduleTables";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3088/bus-route/routes/all");
  const data = await res.json();
  const paths = data.map((route) => {
    return {
      params: { id: route.route.toString(), bound: route.bound },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3088/bus-route/routes/?route=${params.id}&bound=${params.bound}`
  );
  const data = await res.json();
  return {
    props: {
      routeData: data,
    },
  };
};

const RouteTables = ({ routeData }) => {
  const router = useRouter();
  return (
    <Row>
      <Col lg="12">
        <RouteScheduleTables routeData={routeData} />
      </Col>
      <div className="button-group">
        <Button color="primary" tag="a" className="mt-3" href="/">
          Go Back
        </Button>
      </div>
    </Row>
  );
};

export default RouteTables;
