import { parseISO, format } from "date-fns";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time datatype={dateString}>{format(date, "yyyy/L/d")}</time>;
};

export default Date;
