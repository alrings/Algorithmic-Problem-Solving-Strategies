// 보글 게임 (문제 ID: BOGGLE, 난이도: 하)

// const board = [
//   ['N', 'N', 'N', 'N', 'S'],
//   ['N', 'E', 'E', 'E', 'N'],
//   ['N', 'E', 'Y', 'E', 'N'],
//   ['N', 'E', 'E', 'E', 'N'],
//   ['N', 'N', 'N', 'N', 'N'],
// ];

const board = [
  ['U', 'R', 'L', 'P', 'M'],
  ['X', 'P', 'R', 'E', 'T'],
  ['G', 'I', 'A', 'E', 'T'],
  ['X', 'T', 'N', 'Z', 'Y'],
  ['X', 'O', 'Q', 'R', 'S'],
];

const directionX = [-1, -1, -1, 1, 1, 1, 0, 0];
const directionY = [-1, 0, 1, -1, 0, 1, -1, 1];

const hasWord = (y: number, x: number, word: string): boolean => {
  if (board[y] === undefined || board[y][x] === undefined) {
    return false;
  }

  if (board[y][x] !== word.substring(0, 1)) {
    return false;
  }

  if (word.length === 1) {
    return true;
  }

  for (let direction = 0; direction < 8; direction += 1) {
    const nextY = y + directionY[direction];
    const nextX = x + directionX[direction];

    if (hasWord(nextY, nextX, word.substring(1, 2))) {
      return true;
    }
  }

  return false;
};

console.info(hasWord(1, 1, 'PRETTY'));
