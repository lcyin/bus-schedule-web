import Link from "next/link";
import React from "react";
import routeStyles from "../styles/Route.module.css";

const RouteItem = ({ route }) => {
  return (
    <li>
      <Link as={`/route/${route.id}`} href="/route/[id]" className={routeStyles.card}>

        <h3>{route.route}</h3>
        <p>To: {route.dest_tc}</p>

      </Link>
    </li>
  );
};

export default RouteItem;
