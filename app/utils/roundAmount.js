// @flow

export default (amount: Number) => {
  if (typeof amount !== 'number') {
    return null;
  }

  return Math.round(amount * 10000) / 10000;
};
