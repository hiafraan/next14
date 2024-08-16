import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>raandev</div>
      <div className={styles.text}>
        Raan creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
