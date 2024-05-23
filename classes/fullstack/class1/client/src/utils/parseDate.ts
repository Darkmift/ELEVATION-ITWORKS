// a fn that tries to parse a string to date
const parseDate = (date: string): Date | null => {
  try {
    return new Date(date);
  } catch (error) {
    return null;
  }
};

export default parseDate;
