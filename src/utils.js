export const alcoholFilter = (ingredients) => {
  return ingredients.filter((item) => item.group === `alcohol`)
}

export const notAlcoholFilter = (ingredients) => {
  return ingredients.filter((item) => item.group === `not-alcohol`)
}