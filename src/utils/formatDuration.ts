import { formatDistanceStrict } from "date-fns";

const formatDuration = (durationInSeconds: number) =>
    formatDistanceStrict(0, durationInSeconds * 1000);

export default formatDuration;
