import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../../../utils/classNames.helper";

type RatingTileProps = {
  header: ReactNode;
  description: ReactNode;
  layout?: "horizontal" | "vertical";
  descriptionClassName?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const RatingTile = ({
  header,
  description,
  layout = "vertical",
  onClick,
  href,
  descriptionClassName,
  ...buttonProps
}: RatingTileProps) => {
  const className = classNames(
    "grid rounded gap-x-2 p-1 items-center",
    layout === "horizontal" && "grid-flow-col"
  );
  const descriptionClassNames = classNames(
    "text-grey-200 text-sm lato-regular",
    descriptionClassName
  );

  if (href) {
    return (
      <a href={href} className={classNames(className, "hover:bg-grey-500")}>
        {header}
        <span className={descriptionClassNames}>{description}</span>
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        {...buttonProps}
        className={classNames(className, "hover:bg-grey-500")}
      >
        {header}
        <span className={descriptionClassNames}>{description}</span>
      </button>
    );
  }

  return (
    <div className={className}>
      {header}
      <span className={descriptionClassNames}>{description}</span>
    </div>
  );
};

export default RatingTile;
