class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int top = 0, bottom = m - 1, left = 0, right = n - 1;
        List<Integer> list = new ArrayList<>();

        while(list.size() < m * n) {
            for(int j = left; j <= right; j++)
                list.add(matrix[top][j]);
            top++;

            for(int i = top; i <= bottom; i++)
                list.add(matrix[i][right]);
            right--;

            if(top <= bottom) {
                for(int j = right; j >= left; j--)
                    list.add(matrix[bottom][j]);
                bottom--;
            }

            if(left <= right) {
                for(int i = bottom; i >= top; i--)
                    list.add(matrix[i][left]);
                left++;
            }
        }

        return list;
    }
}