class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        String first = strs[0], last = strs[strs.length - 1];
        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < Math.min(first.length(), last.length()); i++) {
            if(first.charAt(i) != last.charAt(i))
                return sb.toString();
            sb.append(first.charAt(i));
        }

        return sb.toString();
    }
}