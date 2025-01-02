const formatVotesCount = (count: number) =>
  count > 1000
    ? `${Math.round(count / 1000)} tys. ocen`
    : count > 4
      ? `${count} ocen`
      : count > 1
        ? `${count} oceny`
        : `${count} ocena`;

export default formatVotesCount;
