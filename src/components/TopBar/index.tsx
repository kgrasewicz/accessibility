import Logo from "src/assets/logo.svg?react";

const TopBar = () => {
  return (
    <div className="h-12 w-full bg-grey-900 left-0 top-0 fixed p-2 z-10">
      <div className="flex lg:max-w-[700px] xl:max-w-[1056px] mx-auto">
        <a href="https://www.filmweb.pl/" aria-label="Filmweb">
          <Logo className="h-8" aria-hidden />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
