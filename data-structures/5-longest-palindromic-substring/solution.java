class Solution {
    public String longestPalindromic(String str) {
        if(str.length() <= 1)
            return str;
        
        int n = str.length();
        int start = 0, end = 0, maxLength = 1;
        boolean[][] dp = new boolean[n][n];
        for(int i = 0; i < n; i++) {
            dp[i][i] = true;
            for(int j = 0; j < i; j++) {
                if(str.charAt(i) == str.charAt(j) && (i - j <= 2 || dp[j + 1][i - 1])) {
                    dp[j][i] = true;
                    if(i - j + 1 > maxLength) {
                        maxLength = i - j + 1;
                        start = j;
                        end = i;
                    }
                }
            }
        }

        return str.substring(start, end+1);
    }
}