class Solution {
    public String removeDuplicateLetters(String s) {
        int[] freq = new int[26];

        for(char c : s.toCharArray()) {
            freq[c - 'a']++;
        }

        Stack<Character> stack = new Stack<>();
        Set<Character> set = new HashSet<>();

        for(char c : s.toCharArray()) {
            freq[c - 'a']--;

            if(set.contains(c)) continue;

            while(!stack.isEmpty() && stack.peek() > c && freq[stack.peek() - 'a'] != 0)
                set.remove(stack.pop());

            stack.push(c);
            set.add(c);
        }

        StringBuilder sb = new StringBuilder();
        while(!stack.isEmpty())
            sb.insert(0, stack.pop());
        
        return sb.toString();
    }
}