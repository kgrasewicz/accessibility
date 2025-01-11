import { Outlet } from "react-router";
import TopBar from "src/components/TopBar";

const BaseLayout = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
