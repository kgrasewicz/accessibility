import { ReactNode } from "react";
import Loader from "./Loader";

type LoadContentProps = {
  isLoading: boolean;
  isError?: boolean;
  children: ReactNode;
  className?: string;
  errorElement: ReactNode;
};

const LoadContent = ({
  isLoading,
  isError,
  children,
  className,
  errorElement,
}: LoadContentProps) => {
  return (
    <div aria-busy={isLoading} className={className} aria-live="polite">
      {isLoading && <Loader />}
      {!isLoading && !isError && children}
      {!isLoading && isError && errorElement}
    </div>
  );
};

export default LoadContent;
