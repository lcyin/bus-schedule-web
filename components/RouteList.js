import React from "react";
import routeStyles from "../styles/Route.module.css";
import RouteItem from "./RouteItem";

const RouteList = ({ busRoutes }) => {
  return (
    <div className={routeStyles.grid}>
      {" "}
      <ul>
        {busRoutes.map((route) => (
          <RouteItem key={route.id} route={route} />
        ))}
      </ul>
    </div>
  );
};

export default RouteList;
