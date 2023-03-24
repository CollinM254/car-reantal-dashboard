import HireItem from "../HireItem/HireItem";
import ValueStats from "../ValueStats/ValueStats";
import styles from "./DailyStats.module.scss";

export default function DailyStats() {
  const statsData = getDailyStatistic();

  return (
    <section className={styles["todaysStats"]}>
      <div className={styles["todaysStats_heading"]}>
        <h2>Todays Statistics</h2>
        <p>Current Date</p>
      </div>
      <ValueStats title={"Income"} dailyData={statsData.income} />
      <ValueStats title={"Expences"} dailyData={statsData.expences} />
      <div className={styles.hireStatistic}>
        <div className={styles.dailyStatistic_heading}>
          <h3>Hire vs Cancel</h3>
          <p>Today</p>
        </div>
        <div className={styles.hireAndCancel_list}>
          <HireItem
            title={"Hired"}
            percentageData={{
              today: statsData.hireStatistic.today.hired,
              yesterday: statsData.hireStatistic.yesterday.hired,
            }}
          />
          <HireItem
            title={"Canceled"}
            percentageData={{
              today: statsData.hireStatistic.today.canceled,
              yesterday: statsData.hireStatistic.yesterday.canceled,
            }}
          />
          <HireItem
            title={"Pending"}
            percentageData={{
              today: statsData.hireStatistic.today.pending,
              yesterday: statsData.hireStatistic.yesterday.pending,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function getDailyStatistic() {
  const mockData = {
    income: { week: "25658.00", today: "9460.00", yesterday: "9940.00" },
    expences: { week: "22658.00", today: "5660.00", yesterday: "5240.00" },
    hireStatistic: {
      today: { hired: 54, canceled: 20, pending: 26 },
      yesterday: { hired: 50, canceled: 25, pending: 25 },
    },
  };
  return mockData;
}
