import React from "react";
import Link from "next/link";
import { Row, Col, Button, Table, Card, CardTitle, CardBody } from "reactstrap";
import RouteScheduleTables from "../../../src/components/dashboard/RouteScheduleTables";

const routeData = {
  id: 3,
  route: "1A",
  bound: "O",
  service_type: "1",
  orig_en: "SAU MAU PING (CENTRAL)",
  orig_tc: "中秀茂坪",
  orig_sc: "中秀茂坪",
  dest_en: "STAR FERRY",
  dest_tc: "尖沙咀碼頭",
  dest_sc: "尖沙咀码头",
  routeStops: [
    {
      id: 51,
      bound: "O",
      service_type: "1",
      seq: 1,
      stop: {
        id: 49,
        stop: "A3ADFCDF8487ADB9",
        name_tc: "中秀茂坪",
        name_en: "SAU MAU PING (CENTRAL)",
        name_sc: "中秀茂坪",
        lat: "22.318856",
        long: "114.231353",
      },
    },
    {
      id: 52,
      bound: "O",
      service_type: "1",
      seq: 2,
      stop: {
        id: 50,
        stop: "6F106FD26B684372",
        name_tc: "秀安樓",
        name_en: "SAU ON HOUSE",
        name_sc: "秀安楼",
        lat: "22.316738",
        long: "114.233354",
      },
    },
    {
      id: 53,
      bound: "O",
      service_type: "1",
      seq: 3,
      stop: {
        id: 51,
        stop: "26305AF62FBEE2BC",
        name_tc: "秀明樓",
        name_en: "SAU MING HOUSE",
        name_sc: "秀明楼",
        lat: "22.315095",
        long: "114.234630",
      },
    },
    {
      id: 54,
      bound: "O",
      service_type: "1",
      seq: 4,
      stop: {
        id: 52,
        stop: "A8CE52F4450FE939",
        name_tc: "梁式芝書院",
        name_en: "LEUNG SHEK CHEE COLLEGE",
        name_sc: "梁式芝书院",
        lat: "22.315549",
        long: "114.232908",
      },
    },
    {
      id: 55,
      bound: "O",
      service_type: "1",
      seq: 5,
      stop: {
        id: 53,
        stop: "41E81A921D79F375",
        name_tc: "曉麗苑",
        name_en: "HIU LAI COURT",
        name_sc: "晓丽苑",
        lat: "22.318714",
        long: "114.229840",
      },
    },
  ],
};

const RouteTables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <RouteScheduleTables data={routeData} />
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

// const Route = ({ route }) => {
//   return (
//     <>
//       <h1>{routeData.route}</h1>
//       <p>{routeData.dest_tc}</p>
//       <br></br>
//       <Link href="/">Go Back</Link>
//     </>
//   );
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://my-json-server.typicode.com/lcyin/bus-json-server/routes/${context.params.id}`
//   );
//   const route = await res.json();

//   return {
//     props: { route },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `https://my-json-server.typicode.com/lcyin/bus-json-server/routes`
//   );
//   const routes = await res.json();

//   const ids = routes.map((route) => route.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export default Route;
