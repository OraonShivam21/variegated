class Solution {
    public void moveZeroes(int[] nums) {
        int n = nums.length;
        int[] shifted = new int[n];
        int i = 0, j = 0;

        while(i < n) {
            if(nums[i] != 0)
                shifted[j++] = nums[i];
            i++;
        }

        for(int ind = 0; ind < n; ind++)
            nums[ind] = shifted[ind];
    }
}