class Solution {
    public int maxLen(int[] nums, int n) {
        int maxLen = 0, sum = 0;
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < n; i++) {
            sum += nums[i];

            if(arr[i] == 0 && maxLen == 0)
                maxLen = 1;
            
            if(sum == 0)
                maxLen = i + 1;
            
            if(map.containsKey(sum))
                maxLen = Math.max(maxLen, i - map.get(sum));
            else
                map.put(sum, i);
        }

        return maxLen;
    }
}