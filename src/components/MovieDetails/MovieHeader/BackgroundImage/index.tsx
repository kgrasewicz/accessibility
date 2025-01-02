import arrayBufferToBase64 from "src/utils/arrayBufferToBase64";
import { classNames } from "../../../../utils/classNames.helper";
import styles from "./styles.module.scss";

type BackgroundImageProps = {
  imageData: ArrayBuffer;
};

const BackgroundImage = ({ imageData }: BackgroundImageProps) => {
  const imageFromBuffer = arrayBufferToBase64(imageData);
  console.log(imageFromBuffer);

  return (
    <div className="w-full grid grid-center md:h-[400px] relative [&>div]:md:h-[400px] overflow-hidden mx-auto lg:max-w-[1056px]">
      <img
        className="w-full grid-center"
        src={`data:image/jpg;base64,${imageFromBuffer}`}
      />
      <div className={classNames("w-full grid-center", styles["gradient"])} />
    </div>
  );
};

export default BackgroundImage;
