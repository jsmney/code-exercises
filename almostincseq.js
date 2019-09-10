function almostIncreasingSequence(sequence) {
  let removed = false;
  let removedIdxA;
  let removedIdxB;
  let seqCopy = sequence.slice();
  if (removed === false) {
      for (let i = 1; i < sequence.length; i++) {
          if (sequence[i - 1] < sequence[i]) {
              continue;
          } else {
              removed = true;
              removedIdxA = i;
              removedIdxB = i - 1;
              break;
          }
      }
  }
  sequence.splice(removedIdxA, 1);
  seqCopy.splice(removedIdxB, 1);
  function checkArr (arr) {
      for (let i = 1; i < arr.length; i++) {
          if (arr[i - 1] < arr[i]) {
              continue;
          } else {
              return false;
          }
      }
      return true;
  }
  if (removed) {
      return checkArr(sequence) || checkArr(seqCopy);
  }
  return true;
}
