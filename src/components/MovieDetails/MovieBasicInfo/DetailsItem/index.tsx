import Skeleton from "react-loading-skeleton";

type Item = {
  navigateTo: string;
  text: string;
};

type DetailsItemProps = {
  label: string;
  items?: Item[];
  isPending?: boolean;
};

const DetailsItem = ({ label, items, isPending }: DetailsItemProps) => {
  if (isPending) {
    return <Skeleton />;
  }

  return (
    <h3 className="text-sm grid grid-flow-row gap-x-4 grid-cols-[70px_auto]">
      <span className="text-grey-300">{label}</span>
      <span>
        {items && items?.length > 0
          ? items.map((item, index) => (
              <a
                key={index}
                className="text-grey-600 underline mr-2"
                href={item.navigateTo}
              >
                {item.text}
              </a>
            ))
          : "-"}
      </span>
    </h3>
  );
};

export default DetailsItem;
