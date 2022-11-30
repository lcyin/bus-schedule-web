import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Collapse,
  Button,
} from "reactstrap";
import { differenceInMinutes } from "date-fns";

const CollapseItem = ({ activeItem, data, index, clickEvent }) => {
  const { query } = useRouter();

  const [etaList, setEtaList] = useState([]);

  const fetchEtaList = () => {
    if (activeItem === index) {
      console.log(
        "🚀 ~ file: CollapseItem.js ~ line 26 ~ fetchEtaList ~ activeItem",
        activeItem
      );
      fetch(
        `https://data.etabus.gov.hk/v1/transport/kmb/eta/${data.stop.stop}/${query.id}/1`
      )
        .then((res) => res.json())
        .then((etaData) => {
          setEtaList(etaData.data.filter((s) => s.dir === data.bound));
        });
    }
  };

  useEffect(() => {
    fetchEtaList();
    const intervalId = setInterval(fetchEtaList, 1000);
    return () => clearInterval(intervalId);
  }, [activeItem]);

  return (
    <>
      <tr
        className="border-top"
        onClick={() => {
          clickEvent(index);
        }}
      >
        <td>
          <div className="d-flex align-items-center p-2 ">
            <span className="text-muted">{data.seq}</span>

            <div className="ms-3">
              <h6 className="mb-0">{data.stop.name_tc}</h6>
            </div>
          </div>
        </td>
        <td>6 mins</td>
      </tr>
      <tr className="border-top">
        <Collapse isOpen={activeItem === index}>
          <td>
            {etaList.length > 0 ? (
              etaList.map((eta, etai) => {
                const minsDiff = differenceInMinutes(
                  new Date(eta.eta),
                  new Date()
                );

                if (minsDiff > 0) {
                  return (
                    <div key={etai} className="d-flex align-items-center p-2 ">
                      <div className="ms-3">
                        {/* <h6 className="mb-0">{data.stop.name_tc}</h6> */}
                        <p>{minsDiff} mins</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={etai} className="d-flex align-items-center p-2 ">
                      <div className="ms-3">
                        {/* <h6 className="mb-0">{data.stop.name_tc}</h6> */}
                        <p>passed</p>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div className="d-flex align-items-center p-2 ">
                <div className="ms-3">
                  <h6 className="mb-0">No Bus Info</h6>
                </div>
              </div>
            )}
          </td>
        </Collapse>
      </tr>
    </>
  );
};

export default CollapseItem;
