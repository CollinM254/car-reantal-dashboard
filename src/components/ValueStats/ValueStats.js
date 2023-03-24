import Image from "next/image";
import styles from "./ValueStats.module.scss";
import arrowUp from "../../../public/icons/up-arrow.svg";
import arrowDown from "../../../public/icons/down-arrow.svg";

export default async function ValueStats({ title, dailyData }) {
  const dailyDiff = valueDiff(dailyData.today, dailyData.yesterday);

  return (
    <div className={styles.dailyStatistic}>
      <div className={styles.dailyStatistic_heading}>
        <h3>{title}</h3>
        <p>Today</p>
      </div>
      <div className={styles.dailyStatistic_value}>
        <h2>{"$" + dailyData.today} </h2>
        <p className={dailyDiff < 0 ? styles.decrease : styles.increase}>
          <Image src={dailyDiff < 0 ? arrowDown : arrowUp} />
          {` ${
            dailyDiff.toFixed(2) * 100 > 0
              ? dailyDiff.toFixed(2) * 100
              : dailyDiff.toFixed(2) * -100
          }%`}
        </p>
      </div>
      <small>Compare to {"$" + dailyData.yesterday} yesterday</small>
      <div className={styles.lastWeek}>
        <p>Last week income</p>
        <p>${dailyData.week}</p>
      </div>
    </div>
  );
}

function valueDiff(current, prev) {
  return (current - prev) / prev;
}
