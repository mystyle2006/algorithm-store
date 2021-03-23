function sortByPrice(a, b) {
  if (a.price === b.price) {
    return a.name.localeCompare(b.name);
  }

  return a.price - b.price;
}
function sortByPriceAscending(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    const result = parsed.sort(sortByPrice);
    return JSON.stringify(result);
  } catch (error) {
    console.error(error);
  }
}

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));