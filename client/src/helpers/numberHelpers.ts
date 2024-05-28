export const generateRandomNumberBetween = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export const convertPercentageToNumber = (percentageString: String) => {
  // Remove the '%' character
  const numericString = percentageString.replace("%", "");
  // Convert the string to a number
  const number = parseFloat(numericString);
  return number;
};
