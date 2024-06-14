function largestNumber(nums) {
  const compare = (a, b) => {
    const sortA = String(a) + String(b);
    const sortB = String(b) + String(a);
    return sortB.localeCompare(sortA);
  };

  nums.sort(compare);

  const allZeroes = nums.every(num => num === 0);
  return allZeroes ? "0" : nums.join("");
}

const array = [10, 2];
const largestNo = largestNumber(array);

console.log(largestNo);
