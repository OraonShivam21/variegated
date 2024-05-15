class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length <= 1)
            return nums.length;
        
        Set<Integer> set = new HashSet<>();
        for(int num : nums)
            set.add(num);
        
        int count = 1, ans = 1;
        for(int val : set) {
            if(set.contains(val - 1))
                continue;
            
            int nextVal = val + 1;
            if(set.contains(nextVal)) {
                count = 1;
                while(set.contains(nextVal)) {
                    count++;
                    nextVal++;
                }
            } else {
                count = 1;
            }
        }

        return ans;
    }
}