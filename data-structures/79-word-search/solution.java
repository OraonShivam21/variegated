class Solution {
    public boolean wordSearch(char[][] board, String word, boolean[][] visited, int i, int j, int ind) {
        if(ind == word.length())
            return true;
        
        if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || visited[i][j] || board[i][j] != word.charAt(ind))
            return false;
        
        visited[i][j] = true;

        if(wordSearch(board, word, visited, i + 1, j, ind + 1) ||
           wordSearch(board, word, visited, i, j - 1, ind + 1) ||
           wordSearch(board, word, visited, i, j + 1, ind + 1) ||
           wordSearch(board, word, visited, i - 1, j, ind + 1))
            return true;

        visited[i][j] = false;
        return false;
    }

    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;

        boolean[][] visited = new boolean[m][n];

        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(board[i][j] == word.charAt(0))
                    if(wordSearch(board, word, visited, i, j, 0))
                        return true;
            }
        }

        return false;
    }
}