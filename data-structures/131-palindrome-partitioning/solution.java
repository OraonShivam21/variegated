class Solution {
    public boolean isPalindrome(String s, int start, int end) {
        while(start <= end) {
            if(s.charAt(start++) != s.charAt(end--))
                return false;
        }
        return true;
    }

    public void backtrack(String s, List<List<String>> list, List<String> temp, int start) {
        if(start == s.length()) {
            list.add(new ArrayList<>(temp));
            return;
        }

        for(int i = start; i < s.length(); i++) {
            if(isPalindrome(s, start, i)) {
                temp.add(s.substring(start, i + 1));
                backtrack(s, list, temp, i + 1);
                temp.remove(temp.size() - 1);
            }
        }
    }

    public List<List<String>> partition(String s) {
        List<List<String>> list = new ArrayList<>();
        backtrack(s, list, new ArrayList<>(), 0);
        return list;
    }
}