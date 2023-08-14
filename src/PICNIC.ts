const n = 6;
const areFriends: boolean[][] = [
  [false, true, true, false, false],
  [true, false, true, true, true, false],
  [true, true, false, true, true, false],
  [false, true, true, false, true, true],
  [false, true, true, true, false, true],
  [false, false, false, true, true, false],
];

// 잘못된 코드
const countPairings1 = (taken: boolean[]) => {
  let finished = true;

  for (let i = 0; i < n; ++i) {
    if (!taken[i]) {
      finished = false;
    }
  }

  if (finished) {
    return 1;
  }

  let ret = 0;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!taken[i] && !taken[j] && areFriends[i][j]) {
        taken[i] = taken[j] = true;
        ret += countPairings1(taken);
        taken[i] = taken[j] = false;
      }
    }
  }

  return ret;
};

const countPairings2 = (taken: boolean[]) => {
  let firstFree = -1;

  for (let i = 0; i < n; ++i) {
    if (!taken[i]) {
      firstFree = i;
      break;
    }
  }

  if (firstFree === -1) {
    return 1;
  }

  let ret = 0;

  for (let pairWith = firstFree + 1; pairWith < n; ++pairWith) {
    if (!taken[pairWith] && areFriends[firstFree][pairWith]) {
      taken[firstFree] = taken[pairWith] = true;
      ret += countPairings2(taken);
      taken[firstFree] = taken[pairWith] = false;
    }
  }

  return ret;
};

// console.info(countPairings1([]));
console.info(countPairings2([]));
