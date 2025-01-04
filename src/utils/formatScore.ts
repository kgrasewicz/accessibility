const formatScore = (value?: number) =>
  value === undefined ? undefined : value.toFixed(1);

export default formatScore;
