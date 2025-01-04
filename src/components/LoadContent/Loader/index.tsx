import { classNames } from "src/utils/classNames.helper";
import styles from "./styles.module.scss";

type LoaderProps = {
  className?: string;
};

const Loader = ({ className }: LoaderProps) => (
  <div
    className={classNames(
      "w-full content-center justify-items-center h-full",
      className
    )}
  >
    <div className={styles["loader"]} />
  </div>
);

export default Loader;
