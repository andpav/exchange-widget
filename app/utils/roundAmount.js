export default (amount) => {
  if (typeof amount !== 'number') {
    return null;
  }

  return Math.round(Number(amount) * 10000) / 10000;
};
