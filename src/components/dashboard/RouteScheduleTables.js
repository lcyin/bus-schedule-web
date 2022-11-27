import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import CollapseItem from "./CollapseItem";

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

const RouteScheduleTables = (data) => {
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
