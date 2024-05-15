class Solution {
    public void reverse(int[] arr) {
        int start = 0, end = arr.length - 1;
        while(start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    public void rotate(int[][] matrix) {
        // transpose
        for(int i = 0; i < matrix.length; i++) {
            for(int j = 0; j <= i; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // reverse along column
        for(int i = 0; i < matrix.length; i++) {
            reverse(matrix[i]);
        }
    }
}