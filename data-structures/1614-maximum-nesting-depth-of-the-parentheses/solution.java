class Solution {
    public int maxDepth(String s) {
        int open = 0, max = 0;
        for(char c : s.toCharArray()) {
            if(c == '(') open++;
            else if(c == ')') open--;

            if(open > max) max = open;
        }

        return max;
    }
}