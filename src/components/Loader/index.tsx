import styles from "./styles.module.scss";

const Loader = () => (
  <div className="w-screen content-center justify-items-center h-screen">
    <div className={styles["loader"]} />
  </div>
);

export default Loader;
