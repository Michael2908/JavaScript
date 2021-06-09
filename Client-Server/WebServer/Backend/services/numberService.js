let M;

const getM = () => M;

const add = (val) => (M += val);

const sub = (val) => (M -= val);

const multiply = (val) => (M *= val);

const divide = (val) => (M = M / val);

const zerofiy = (val) => (M = 0);

module.exports = { getM, add, sub, multiply, divide, zerofiy };
