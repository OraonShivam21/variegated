class Solution {
    // find maximum sub array sum
    public int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE, max = 0;

        for(int num : nums) {
            if(sum <= 0)
                sum = 0;
            
            sum += num;
            if(sum > maxSum) maxSum = sum;
        }

        return maxSum;
    }
}