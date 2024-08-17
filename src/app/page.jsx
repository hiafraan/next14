import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Crafting Powerful WordPress Solutions</h1>
        <p className={styles.desc}>
          Build a website that stands out with our custom WordPress themes,
          plugins, and expert support. Whether you are a business or a blogger,
          we turn your vision into reality.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Get Started Today</button>
          <button className={styles.button}>View Our Work</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
