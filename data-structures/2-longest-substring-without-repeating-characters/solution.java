class Solution {
    public int longestSubstring(String str) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLength = 0;
        int i = 0, j = 0;

        for(j = 0; j < str.length(); j++) {
            map.put(str.charAt(j), map.getOrDefault(str.charAt(j), 0) + 1);
            if(map.size() == j - i + 1) {
                maxLength = Math.max(maxLength, j - i + 1);
            } else if(map.size() < j - i + 1) {
                while(map.size() < j - i + 1) {
                    map.put(str.charAt(i), map.get(str.charAt(i)) - 1);
                    if(map.get(str.charAt(i)) == 0)
                        map.remove(str.charAt(i));
                    i++;
                }
            }
        }

        return maxLength;
    }
}