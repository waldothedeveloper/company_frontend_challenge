const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};
export const displayLocaleDates = (utcDate) => {
  return new Date(utcDate).toLocaleDateString(navigator.language, options);
};
