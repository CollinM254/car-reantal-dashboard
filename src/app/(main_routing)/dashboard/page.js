import Image from "next/image";
import styles from "./page.module.scss";
import magnifierSVG from "../../../../public/icons/menu/Search.svg";
import notificationSVG from "../../../../public/icons/menu/notification-solid.svg";
import notificationBudgetSVG from "../../../../public/icons/menu/notification-badged.svg";
import filterSVG from "../../../../public/icons/Filter.svg";

import DailyStats from "@/components/DailyStats/DailyStats";
import CarStatusTable from "@/components/CarStatusTable/CarStatusTable";

export default async function DashboardPage() {
  return (
    <>
      {/* today stats section */}
      <DailyStats />
      {/* live car status with searchbar */}
      <section className={styles["liveCarStatus"]}>
        <div className={styles["searchBar"]}>
          <button className={styles["notificationButton"]}>
            <Image src={notificationSVG} alt="notification image" />
          </button>
          <form>
            <input type="text" className={styles["searchInput"]} size="30" />
            <button>
              <Image src={magnifierSVG} alt="magnifier glass" />
            </button>
          </form>
        </div>
        <div className={styles["carStatus_container"]}>
          <div className={styles.carStatus_heading}>
            <h4>Live Car Status</h4>
            <button>
              <Image src={filterSVG} />
              Filter
            </button>
          </div>
          <CarStatusTable />
        </div>
      </section>
    </>
  );
}
