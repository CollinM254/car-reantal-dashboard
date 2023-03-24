"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavigationButton.module.scss";

const NavigationButton = ({ path, svgPic, children }) => {
  const pathname = usePathname();

  return (
    <li
      className={
        pathname === path
          ? styles.navigation_item_active
          : styles.navigation_item_inactive
      }
    >
      <Link href={path} className={styles["navButton_active"]}>
        <Image src={svgPic} alt="dashboard image" />
        {children}
      </Link>
    </li>
  );
};

export default NavigationButton;
