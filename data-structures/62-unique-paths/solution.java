public Solution {
    public int uniquePaths(int m, int n, int[][] paths, int i, int j) {
        if(i < 0 || i >= m || j < 0 || j >= n)
            return 0;
        
        if(i == m-1 && j == n-1)
            return 1;

        if(paths[i][j] != 0)
            return paths[i][j];
        
        paths[i][j] = uniquePaths(m, n, paths, i+1, j) + uniquePaths(m, n, paths, i, j+1);
        return paths[i][j];
    }

    public int uniquePaths(int m, int n) {
        int[][] paths = new int[m][n];

        return uniquePaths(m, n, paths, 0, 0);
    }
}