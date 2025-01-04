import { ReactNode } from "react";
import Loader from "./Loader";

type LoadContentProps = {
  isLoading: boolean;
  isError?: boolean;
  children: ReactNode;
  className?: string;
};

const LoadContent = ({
  isLoading,
  isError,
  children,
  className,
}: LoadContentProps) => {
  return (
    <div aria-busy={isLoading} className={className} aria-live="polite">
      {isLoading && <Loader />}
      {!isLoading && !isError && children}
      {!isLoading && isError && <div>error</div>}
    </div>
  );
};

export default LoadContent;
