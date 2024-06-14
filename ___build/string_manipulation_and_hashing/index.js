function getSubstrings(inputString) {
  const substrings = [];

  for (let i = 0; i < inputString.length; i++) {
    substrings.push(inputString.substring(i, i + 2));
  }

  return substrings;
}

function getHash(inputString, charPriority) {
  const substrings = getSubstrings(inputString);
  const frequency = {};

  for (const substring of substrings) {
    frequency[substring] = (frequency[substring] || 0) + 1;
  }

  const sortedSubstrings = Object.entries(frequency)
    .sort((a, b) => {
      const freqA = a[1];
      const freqB = b[1];

      if (freqA !== freqB) return freqB - freqA;

      let sumA = 0,
        sumB = 0;
      for (const char of a[0]) {
        sumA += charPriority[char] || 0;
      }
      for (const char of b[0]) {
        sumB += charPriority[char] || 0;
      }

      return sumB - sumA;
    })
    .map(([substring]) => substring);

  return sortedSubstrings.join("");
}

const inputString = "*+-+**--+-+";
const charPriority = { "*": 2, "+": 1, "-": 1 };

const hash = getHash(inputString, charPriority);

console.log(hash);
