class Solution {
    public int missingNumber(int[] nums) {
        int rangeSum = 0;
        for(int i = 0, i <= nums.length; i++)
            rangeSum += i;
        
        int missingSum = 0;
        for(int i = 0; i < nums.length; i++)
            missingSum += nums[i];
        
        return rangeSum - missingSum;
    }
}