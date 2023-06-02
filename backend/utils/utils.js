const isDateValid = (date) => new Date(date).toString() !== "Invalid Date";

module.exports = {
  isDateValid,
};
