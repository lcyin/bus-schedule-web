import Link from "next/link";
import React from "react";
import routeStyles from "../styles/Route.module.css";

const RouteItem = ({ route }) => {
  return (
    <Link
      as={`/route/${route.id}`}
      href="/route/[id]"
      className={routeStyles.card}
    >
      <p>{route.route}</p>
      <p>To: {route.dest_tc}</p>
    </Link>
  );
};

export default RouteItem;
