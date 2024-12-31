type BarProps = {
  percentage: number;
};

const Bar = ({ percentage }: BarProps) => (
  <div className="w-full h-3 bg-[#f8f8f8] rounded-xl">
    <div
      style={{ width: `${percentage}%` }}
      className="bg-primary rounded-xl h-3 transition duration-240"
    />
  </div>
);

export default Bar;
