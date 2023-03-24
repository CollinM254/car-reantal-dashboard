import Image from "next/image";
import styles from "./CarStatusTable.module.scss";

import alex from "../../../public/pictures/Alex.png";
import luke from "../../../public/pictures/Luke.png";
import razib from "../../../public/pictures/Razib.png";

const picturesSource = {
  "Alex Noman": alex,
  "Razib Rahman": razib,
  "Luke Norton": luke,
};

const statusSource = {
  Completed: "Completed",
  "In route": "In_route",
  Pending: "Pending",
};

export default function CarStatusTable() {
  const driverList = getLiveCarStatus();

  return (
    <table className={styles.driverStatus_table}>
      <thead>
        <tr className={styles.row_heading}>
          <th>No.</th>
          <th>Car no.</th>
          <th>Driver</th>
          <th>Status</th>
          <th>Earning</th>
        </tr>
      </thead>
      <tbody>
        {driverList.map((_elem) => {
          return (
            <tr key={_elem.id} className={styles.row_mainContent}>
              <td className={styles.number}>{_elem.No}</td>
              <td className={styles.carNumber}>
                <span>{_elem.carNo}</span>
              </td>
              <td className={styles.driverName}>
                <Image src={picturesSource[_elem.DriverName]} />
                {_elem.DriverName}
              </td>
              <td className={styles[`status_${statusSource[_elem.status]}`]}>
                {_elem.status}
              </td>
              <td className={styles.earning}>{"$ " + _elem.earning}</td>
              <button>Details</button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function getLiveCarStatus() {
  const mockData = [
    {
      id: 1,
      No: "01",
      carNo: 6465,
      DriverName: "Alex Noman",
      status: "Completed",
      earning: "35.44",
    },
    {
      id: 2,
      No: "02",
      carNo: 5665,
      DriverName: "Razib Rahman",
      status: "Pending",
      earning: "0.00",
    },
    {
      id: 3,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 4,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 5,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 6,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 7,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 8,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 9,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 10,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
    {
      id: 11,
      No: "03",
      carNo: 1755,
      DriverName: "Luke Norton",
      status: "In route",
      earning: "23.50",
    },
  ];

  return mockData;
}
