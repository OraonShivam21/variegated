class Solution {
    public int findMaxInCol(int[][] matrix, int m, int col) {
        int value = Integer.MIN_VALUE, ind = -1;

        for(int i = 0; i < m; i++) {
            if(matrix[i][col] > value) {
                value = matrix[i][col];
                ind = i;
            }
        }

        return ind;
    }

    public int[] findPeakGrid(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int low = 0, high = n - 1;

        while(low <= high) {
            int mid = low + (high - low) / 2;

            int row = findMaxInCol(matrix, m, mid);
            int left, right;

            if(mid - 1 >= 0) {
                left = matrix[row][mid - 1];
            } else {
                left = -1;
            }

            if(mid + 1 < n) {
                right = matrix[row][mid + 1];
            } else {
                right = -1;
            }

            if(left < matrix[row][mid] && matrix[row][mid] > right) {
                return new int[] {row, mid};
            } else if(left > matrix[row][mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return new int[] {-1, -1};
    }
}