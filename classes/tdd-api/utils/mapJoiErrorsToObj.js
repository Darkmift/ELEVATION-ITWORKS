export default function mapJoiErrorsToObj(details) {
  return details.reduce((acc, err) => {
    acc[err.path] = err.message;
    return acc;
  }, {});
}
