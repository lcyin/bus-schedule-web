import Head from "next/head";
import RouteList from "../components/RouteList";

export default function Home({ busRoutes }) {
  return (
    <div>
      <Head>
        <title>Bus Schedule</title>
      </Head>
      welcome to next
      <RouteList busRoutes={busRoutes} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3088/bus-route/routes/all?limit=3");
  const busRoutes = await res.json();

  return {
    props: { busRoutes },
  };
};
