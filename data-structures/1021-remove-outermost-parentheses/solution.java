class Solution {
    public String removeOuterParentheses(String s) {
        StringBuilder sb = new StringBuilder();
        int open = 0;

        for(char ch : s.toCharArray()) {
            if(ch == '(' && open++ > 0) sb.append(ch);
            if(ch == ')' && --open > 0) sb.append(ch);
        }

        return sb.toString();
    }
}