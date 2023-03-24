import styles from "./MenuNavigation.module.scss";
import dashboardSVG from "../../../public/icons/menu/Dashboard.svg";
import carSVG from "../../../public/icons/menu/Car.svg";
import bookingSVG from "../../../public/icons/menu/Booking.svg";
import bellSVG from "../../../public/icons/menu/Bell.svg";
import settingsSVG from "../../../public/icons/menu/Settings.svg";
import paymentSVG from "../../../public/icons/menu/Payment.svg";
import reportSVG from "../../../public/icons/menu/Report.svg";
import transactionSVG from "../../../public/icons/menu/Transaction.svg";
import logoutSVG from "../../../public/icons/Logout.svg";

import NavigationButton from "../NavigationButton/NavigationButton";
import Image from "next/image";

export default function MenuNavigation() {
  return (
    <div className={styles["mainMenu"]}>
      <div className={styles.nav_wrapper}>
        <h1 className={styles["menuLogo"]}>CAR RENT</h1>
        <ul className={styles["menuList"]}>
          <NavigationButton svgPic={dashboardSVG} path={"/dashboard"}>
            Dashboard
          </NavigationButton>

          <NavigationButton svgPic={carSVG} path={"/drivers"}>
            Drivers
          </NavigationButton>

          <NavigationButton svgPic={bookingSVG} path={"/bookings"}>
            Booking
          </NavigationButton>

          <NavigationButton svgPic={bellSVG} path={"/notifications"}>
            Notifications
          </NavigationButton>

          <NavigationButton svgPic={settingsSVG} path={"/settings"}>
            Settings
          </NavigationButton>
        </ul>
        <div className={styles["SplitLine"]}>
          <hr />
        </div>
        <ul className={styles["menuList"]}>
          <NavigationButton svgPic={paymentSVG} path={"/paymentDetails"}>
            Payment Details
          </NavigationButton>

          <NavigationButton svgPic={transactionSVG} path={"/transactions"}>
            Transactions
          </NavigationButton>

          <NavigationButton svgPic={reportSVG} path={"/carReport"}>
            Car Report
          </NavigationButton>
        </ul>
      </div>
      <button>
        <Image src={logoutSVG} />
        Sign out
      </button>
    </div>
  );
}
