export const partition = (list = [], n = 1) => {
  const isPositiveInteger = Number.isSafeInteger(n) && n > 0;
  if (!isPositiveInteger) {
    throw new RangeError('n must be a positive integer');
  }

  const partitions = [];
  const partitionLength = Math.ceil(list.length / n);

  for (let i = 0; i < list.length; i += partitionLength) {
    const partition = list.slice(i, i + partitionLength);
    partitions.push(partition);
  }

  return partitions; // an array of n arrays
};
