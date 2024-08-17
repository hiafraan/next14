import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Raanlance</div>
      <div className={styles.text}>© 2024 Raanlance. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
