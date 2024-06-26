class Solution {
    public boolean wordBreak(String s, List<String> wordDict, int ind, Boolean[] memo) {
        if(ind == s.length())
            return true;
        
        if(memo[ind] != null)
            return memo[ind];
        
        for(String word : wordDict) {
            if(s.startsWith(word, ind)) {
                if(wordBreak(s, wordDict, ind + word.length(), memo))
                    return memo[ind] = true;
            }
        }

        return memo[ind] = false;
    }

    public boolean wordBreak(String s, List<String> wordDict) {
        Boolean[] memo = new Boolean[s.length() + 1];
        return wordBreak(s, wordDict, 0, memo);
    }
}