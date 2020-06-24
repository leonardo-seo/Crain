function solution(board, moves) {
  const basket = [];
  let result = 0;
  moves.forEach(l => {
    const doll = pickup(board, l - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        result += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return result;
}
function pickup(board, index) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][index] !== 0) {
      const doll = board[i][index];
      board[i][index] = 0;
      return doll;
    }
  }
}
const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));