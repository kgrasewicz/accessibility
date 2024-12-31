import arrayBufferToBase64 from "src/utils/arrayBufferToBase64";
import { classNames } from "../../../../utils/classNames.helper";
import styles from "./styles.module.scss";

type BackgroundImageProps = {
  imageData: ArrayBuffer;
  className?: string;
};

const BackgroundImage = ({ imageData, className }: BackgroundImageProps) => {
  const imageFromBuffer = arrayBufferToBase64(imageData);
  console.log(imageFromBuffer);

  return (
    <div className={classNames("w-full grid grid-center", className)}>
      <img
        className="w-full grid-center"
        src={`data:image/jpg;base64,${imageFromBuffer}`}
      />
      <div className={classNames("w-full grid-center", styles["gradient"])} />
    </div>
  );
};

export default BackgroundImage;
