import ChevronRight from "src/assets/chevronRight.svg?react";
import { Tag as TagBase } from "..";

type TagProps = {
  tag: TagBase;
};

const Tag = ({ tag }: TagProps) => (
  <a
    href="https://www.filmweb.pl/ranking/film/genre/6"
    className="text-grey-600 rounded-lg border-[1px] duration-500 text-xs lato-bold items-center transition hover:bg-grey-200 border-grey-200 py-1 px-2 flex gap-x-1"
  >
    {tag.Label}
    <ChevronRight className="h-2" />
  </a>
);

export default Tag;