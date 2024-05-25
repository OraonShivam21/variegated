class Solution {
    public boolean isDivisionPossible(int[] nums, int threshold, int divisor) {
        for(int num : nums) {
            threshold -= ((num + divisor - 1) / divisor);
            if(threshold < 0)
                return false;
        }

        return threshold >= 0;
    }

    public int smallestDivisor(int[] nums, int threshold) {
        int low = 1, high = nums[0];
        for(int num : nums) {
            if(high < num)
                high = num;
        }

        int ans = -1;
        while(low <= high) {
            int mid = low + (high - low) / 2;

            if(isDivisionPossible(nums, threshold, mid)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}