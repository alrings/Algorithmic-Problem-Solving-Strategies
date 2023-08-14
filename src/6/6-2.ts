// 0번부터 차례대로 번호 매겨진 n개의 원소 중 네 개를 고르는 모든 경우를 출력하는 코드를 작성해 봅시다.

const pick = (n: number) => {
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      for (let k = j + 1; k < n; k += 1) {
        for (let l = k + 1; l < n; l += 1) {
          console.info(i, j, k, l);
        }
      }
    }
  }
};

pick(7);

/**
 * @param n 전체 원소의 수
 * @param picked 지금까지 고른 원소들의 번호
 * @param toPick 더 고를 원소의 수
 */
const recursivePick = (n: number, picked: number[], toPick: number) => {
  if (toPick === 0) {
    console.info(picked);
    return;
  }
  console.info('toPick', toPick);

  // 고를 수 있는 가장 작은 번호
  const smallest = picked.length === 0 ? 0 : picked[picked.length - 1] + 1;

  for (let next = smallest; next < n; next += 1) {
    picked.push(next);
    console.info('picked.push', picked);
    recursivePick(n, picked, toPick - 1);
    picked.pop();
    console.info('picked.pop', picked);
  }
};

recursivePick(7, [], 4);
