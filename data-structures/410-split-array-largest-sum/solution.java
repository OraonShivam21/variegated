class Solution {
    public int isPossible(int[] nums, int mid) {
        int count = 0, sum = 0;

        for(int num : nums) {
            if(sum + num <= mid) sum += num;
            else {
                count++;
                sum = num;
            }
        }

        return count + 1;
    }

    public int splitArray(int[] nums, int k) {
        int low = Integer.MIN_VALUE, high = 0;
        for(int num : nums) {
            low = Math.max(low, num);
            high += num;
        }

        int ans = -1;
        while(low <= high) {
            int mid = low + (high - low) / 2;

            if(isPossible(nums, mid) <= k) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}