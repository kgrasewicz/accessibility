import { Outlet } from "react-router";
import TopBar from "src/components/TopBar";

const BaseLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default BaseLayout;
