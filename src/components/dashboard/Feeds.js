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

const routeData = [
  {
    id: 1,
    route: "1",
    bound: "O",
    service_type: "1",
    orig_en: "CHUK YUEN ESTATE",
    orig_tc: "竹園邨",
    orig_sc: "竹园邨",
    dest_en: "STAR FERRY",
    dest_tc: "尖沙咀碼頭",
    dest_sc: "尖沙咀码头",
    date: "6 minute ago",
  },
  {
    id: 2,
    route: "1",
    bound: "I",
    service_type: "1",
    orig_en: "STAR FERRY",
    orig_tc: "尖沙咀碼頭",
    orig_sc: "尖沙咀码头",
    dest_en: "CHUK YUEN ESTATE",
    dest_tc: "竹園邨",
    dest_sc: "竹园邨",
    date: "6 minute ago",
  },
  {
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
    date: "6 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">KMB BUS</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle>
        <ListGroup flush className="mt-4 ">
          {routeData.map((route) => (
            <ListGroupItem
              key={route.id}
              action
              // as={`/route/${route.id}`}
              href={`/route/${route.route}`}
              tag="a"
              className="d-flex align-items-center p-3 border-0 hstack gap-3"
            >
              {/* <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon} />
              </Button> */}
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

export default Feeds;
