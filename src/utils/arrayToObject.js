export default function arrayToObject(arr) {
  const exelObject = {};
  arr.forEach((currentElement) => {
    switch (currentElement[0]) {
      case 'year':
        exelObject.year = currentElement[1];
        break;
      case 'month':
        exelObject.month = currentElement.slice(1, currentElement.length - 1);
        break;
      case 'profit':
        exelObject.totalProfit = currentElement[currentElement.length - 1];
        exelObject.profit = currentElement.slice(1, currentElement.length - 1);
        break;
      case 'sales':
        exelObject.totalSales = currentElement[currentElement.length - 1];
        exelObject.sales = currentElement.slice(1, currentElement.length - 1);
        break;
      default:
        break;
    }
  });
  return exelObject;
}
