export const dateFormatter = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("it-IT", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
