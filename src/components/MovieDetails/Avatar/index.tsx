import getFilmwebUrl from "src/utils/getFilmwebUrl";

const className =
  "text-grey-500 w-full h-full flex items-center justify-center text-xl rounded-full bg-grey-200";

type AvatarProps = {
  name: string;
  isLink?: boolean;
};

const Avatar = ({ name, isLink }: AvatarProps) => {
  const firstNameLetter = name.charAt(0);

  const content = isLink ? (
    <a href={getFilmwebUrl(`/user/${name}`)} className={className}>
      {firstNameLetter}
    </a>
  ) : (
    <span className={className}>{firstNameLetter}</span>
  );

  return (
    <span className="uppercase flex p-[2px] rounded-full h-12 w-12 border-[1px] border-grey-200">
      {content}
    </span>
  );
};

export default Avatar;
