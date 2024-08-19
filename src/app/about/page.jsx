import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>Innovative WordPress Solutions</h1>
        <p className={styles.desc}>
          We create digital experiences that are innovative, impactful, and
          tailored to your needs. From custom themes to powerful plugins, our
          solutions elevate your online presence.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Projects Completed</p>
          </div>
          <div className={styles.box}>
            <h1>7 K+</h1>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
