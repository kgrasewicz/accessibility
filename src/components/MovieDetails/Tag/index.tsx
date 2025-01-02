import ChevronRight from "src/assets/chevronRight.svg?react";
import getFilmwebUrl from "src/utils/getFilmwebUrl";

type TagProps = {
  tag: { code: string; label: string };
};

const Tag = ({ tag }: TagProps) => (
  <a
    href={getFilmwebUrl(`/ranking/film/genre/${tag.code}`)}
    className="text-grey-600 rounded-lg border-[1px] duration-500 text-xs lato-bold items-center transition hover:bg-grey-200 border-grey-200 py-1 px-2 flex gap-x-1"
  >
    {tag.label}
    <ChevronRight aria-hidden className="h-2" />
  </a>
);

export default Tag;
