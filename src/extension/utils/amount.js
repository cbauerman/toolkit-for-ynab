export function sortByAbsGettableAmount(a, b) {
  const amountA = Math.abs(a.get('amount'));
  const amountB = Math.abs(b.get('amount'));

  if (amountA < amountB) {
    return -1;
  } else if (amountA > amountB) {
    return 1;
  }

  return 0;
}
