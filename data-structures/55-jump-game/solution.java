class Solution {
    public boolean canJump(int[] nums) {
        int n = nums.length;
        int destination = n - 1;

        for(int i = n - 1; i >= 0; i--) {
            if(nums[i] + i >= destination)
                destination = i;
        }

        return destination == 0;
    }
}