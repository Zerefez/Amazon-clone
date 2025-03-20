
const money = (price) => {
  return (Math.round(price) / 100).toFixed(2);
};
export default money;
