// 필수 조건: n >= 1
// 결과: 1부터 n까지의 합을 반환합니다.

const sum = (n: number) => {
  let ret = 0;

  for (let i = 1; i <= n; i += 1) {
    ret += i;
  }

  return ret;
};

const recursiveSum = (n: number): number => {
  if (n === 1) {
    return 1;
  }

  return n + recursiveSum(n - 1);
};

console.info(sum(10));
console.info(recursiveSum(10));
