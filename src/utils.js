export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const alcoholFilter = (ingredients) => {
  return ingredients.filter((item) => item.group === `alcohol`);
};

export const notAlcoholFilter = (ingredients) => {
  return ingredients.filter((item) => item.group === `not-alcohol`);
};
