function solve(arr) {

    let matrix = [];
    for (let row = 0; row < arr.length; row++) {
        let tokens = arr[row].split(' ').map(Number);
        matrix[row] = [];

        for (let col = 0; col < tokens.length; col++) {
            matrix[row][col] = tokens[col];
        }
    }

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                leftDiagonalSum += matrix[row][col];
            }
            if (row + col === matrix[row].length - 1) {
                rightDiagonalSum += matrix[row][col];
            }
        }
    }

    if (leftDiagonalSum === rightDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row === col) {
                    continue;
                }
                if (row + col === matrix[row].length - 1) {
                    continue;
                }

                matrix[row][col] = leftDiagonalSum;
            }
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);