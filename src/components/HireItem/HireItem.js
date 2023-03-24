import styles from "./HireItem.module.scss";
import arrowUp from "../../../public/icons/up-arrow.svg";
import arrowDown from "../../../public/icons/down-arrow.svg";
import Image from "next/image";

export default function HireItem({
  title,
  percentageData: { today, yesterday },
}) {
  return (
    <div className={styles.item}>
      <p className={styles[`desc_${title}`]}>Total Hired</p>
      <p>
        {today + "%"}
        <Image
          src={today > yesterday ? arrowUp : arrowDown}
          width={14}
          height={14}
        />
      </p>
    </div>
  );
}
