class Solution {
    public int removeDuplicates(int[] nums) {
        int left = 1, right = 1;
        while(right != nums.length) {
            if(nums[right] != nums[right - 1]) {
                nums[left] = nums[right];
                left++;
            }
            right++;
        }

        return left;
    }
}

// returning the index upto which the elements are kept unique in the nums array.