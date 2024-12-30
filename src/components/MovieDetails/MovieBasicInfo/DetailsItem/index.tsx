type DetailsItemProps = {
  navigateTo: string;
  label: string;
  text: string;
};

const DetailsItem = ({ navigateTo, label, text }: DetailsItemProps) => {
  return (
    <div className="text-sm grid grid-flow-row gap-x-4 grid-cols-[70px_auto]">
      <span className="text-grey-300">{label}</span>
      <a className="text-grey-600 underline" href={navigateTo}>
        {text}
      </a>
    </div>
  );
};

export default DetailsItem;