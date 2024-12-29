import { classNames } from "../../../../utils/classNames.helper";
import styles from "./styles.module.scss";

type BackgroundImageProps = {
  url: string;
  className?: string;
};

const BackgroundImage = ({ url, className }: BackgroundImageProps) => (
  <div className={classNames("w-full grid grid-center", className)}>
    <img className="w-full grid-center" src={url} />
    <div className={classNames("w-full grid-center", styles["gradient"])} />
  </div>
);

export default BackgroundImage;
