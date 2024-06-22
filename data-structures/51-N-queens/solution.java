class Solution {
    List<List<String>> result = new ArrayList<>();

    public void addIntoResult(char[][] board) {
        List<String> list = new ArrayList<>();
        for(int i = 0; i < board.length; i++) {
            list.add(new String(board[i]));
        }
        result.add(list);
    }

    public boolean isSafe(char[][] board, int row, int col) {
        for(int i = row; i >= 0; i--) {
            if(board[i][col] == 'Q')
                return false;
        }

        for(int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if(board[i][j] == 'Q')
                return false;
        }

        for(int i = row, j = col; i >= 0 && j < board.length; i--, j++) {
            if(board[i][j] == 'Q')
                return false;
        }

        return true;
    }

    public void solve(char[][] board, int row) {
        if(row == board.length) {
            addIntoResult(board);
            return;
        }

        for(int col = 0; col < board.length; col++) {
            if(isSafe(board, row, col)) {
                board[row][col] = 'Q';
                solve(board, row + 1);
                board[row][col] = '.';
            }
        }
    }

    public List<List<String>> solveNQueens(int n) {
        char[][] board = new char[n][n];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++)
                board[i][j] = '.';
        }

        solve(board, 0);
        return result;
    }
}