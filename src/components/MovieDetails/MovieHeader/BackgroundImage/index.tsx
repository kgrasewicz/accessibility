import { classNames } from "../../../../utils/classNames.helper";
import styles from "./styles.module.scss";

type BackgroundImageProps = {
  imageUrl: string;
  altText?: string;
};

const BackgroundImage = ({ imageUrl, altText }: BackgroundImageProps) => {
  return (
    <div className="w-full grid grid-center md:h-[400px] relative [&>div]:md:h-[400px] overflow-hidden mx-auto lg:max-w-[1056px]">
      <img className="w-full grid-center" src={imageUrl} alt={altText} />
      <div className={classNames("w-full grid-center", styles["gradient"])} />
    </div>
  );
};

export default BackgroundImage;
