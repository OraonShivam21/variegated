class Solution {
    public static void solve(int[][] m, int n, ArrayList<String> list, int row, int col, String dirs) {
        if(row < 0 || row >= n || col < 0 || col >= n || m[row][col] == 0)
            return;
        
        if(row == n - 1 && col == n - 1 && m[row][col] == 1) {
            list.add(dirs);
            return;
        }

        m[row][col] = 0;
        solve(m, n, list, row + 1, col, dirs + "D");
        solve(m, n, list, row, col - 1, dirs + "L");
        solve(m, n, list, row, col + 1, dirs + "R");
        solve(m, n, list, row - 1, col, dirs + "U");
        m[row][col] = 1;
    }

    public static ArrayList<String> findPath(int[][] m, int n) {
        ArrayList<String> list = new ArrayList<>();
        if(m[0][0] == 0 || m[n - 1][n - 1] == 0)
            return list;
        
        solve(m, n, list, 0, 0, "");
        return list;
    }
}