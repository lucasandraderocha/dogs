import { useContext, useEffect } from "react";
import Feed from "../Feed/Feed";
import UserContext from "../../UserContext";

import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <section className={styles.profileDefails}>
        <div>User</div>
      </section>
      <section className={styles.profileFeed}>
        <Feed />
      </section>
    </section>
  );
};

export default UserProfile;
