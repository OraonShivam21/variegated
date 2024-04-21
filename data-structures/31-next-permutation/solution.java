class Solution {
    public void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public void reverse(int n, int[] nums, int start) {
        int end = n - 1;

        while(start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }

    public void nextPermutation(int[] nums) {
        int n = nums.length;
        int break1 = -1, break2 = -1;

        for(int i = n - 2; i >= 0; i--) {
            if(nums[i] < nums[i+1]) {
                break1 = i;
                break;
            }
        }

        if(break1 == -1) {
            reverse(n, nums, 0);
        } else {
            for(int i = n - 1; i >= 0; i--) {
                if(nums[i] > nums[break1]) {
                    break2 = i;
                    break;
                }
            }

            swap(nums, break1, break2);

            reverse(n, nums, break1 + 1);
        }
    }
}