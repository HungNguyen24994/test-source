import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

import styles from "./style.module.css";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const pageTitle = useMemo(() => {
    const pathTitles: { [key: string]: string } = {
      "/": "",
      "/login": "Login Page",
    };

    return pathTitles[pathname] || "";
  }, [pathname]);
  return (
    <div className={styles["Header-Container"]}>
      <div className={styles["Header-PageTitle"]}>{pageTitle}</div>
    </div>
  );
};

export default Header;
