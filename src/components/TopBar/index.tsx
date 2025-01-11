import Logo from "src/assets/logo.svg?react";
import getFilmwebUrl from "src/utils/getFilmwebUrl";

const TopBar = () => {
  return (
    <header className="h-12 w-full bg-grey-900 left-0 top-0 fixed p-2 z-10">
      <div className="flex md:max-w-[700px] lg:max-w-[1056px] mx-auto">
        <a href={getFilmwebUrl()} aria-label="Filmweb">
          <Logo className="h-8" alt-text="Filmweb logo" />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
