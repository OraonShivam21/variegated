// You are given an m x n integer matrix matrix with the following two properties:
// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;

        int row = -1;
        for(int i = 0; i < m; i++) {
            if(matrix[i][n - 1] >= target) {
                row = i;
                break;
            }
        }

        if(row == -1)
            return false;

        for(int i = 0; i < n; i++) {
            if(matrix[row][i] == target)
                return true;
        }

        return false;
    }
}