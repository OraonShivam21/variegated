class Solution {
    public void generate(int n, List<String> list, String str, int open, int close) {
        if(open > n || close > open || str.length() > 2 * n)
            return;
        
        if(open == n && close == n && str.length() == 2 * n) {
            list.add(str);
        }

        generate(n, list, str + "(", open + 1, close);
        generate(n, list, str + ")", open, close + 1);
    }

    public List<String> generateParenthesis(int n) {
        List<String> list = new ArrayList<>();
        generate(n, list, "", 0, 0);
        return list;
    }
}