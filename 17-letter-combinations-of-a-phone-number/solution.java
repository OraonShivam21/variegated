class Solution {
    public void backtrack(String digits, String[] phone_no, List<String> list, String combinations) {
        if(digits.length() == 0) {
            list.add(combinations);
            return;
        }

        String letters = phone_no[digits.charAt(0) - '2'];
        for(char letter : letters.toCharArray()) {
            backtrack(digits.substring(1), phone_no, list, combinations + letter);
        }
    }

    public List<String> letterCombinations(String digits) {
        if(digits.length() == 0 || digits == null)
            return new ArrayList<>();
        
        String[] phone_no = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<String> list = new ArrayList<>();
        backtrack(digits, phone_no, list, "");
        return list;
    }
}