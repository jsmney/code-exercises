function diagonalDifference(arr) {
    // Write your code here
    debugger;
    const squareSize = arr[0].length;
    let finalInt1 = 0;
    let finalInt2 = 0;
    for (let i = 0; i < arr[0].length; i++) {
        finalInt1 += arr[i][i];
        finalInt2 += arr[i][squareSize - i - 1];
    }
    return Math.abs(finalInt1 - finalInt2);
}

diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);