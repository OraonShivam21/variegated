class Solution {
    public int merge(int[] nums, int low, int mid, int high) {
        int[] left = Arrays.copyOfRange(nums, low, mid + 1);
        int[] right = Arrays.copyOfRange(nums, mid + 1, high + 1);

        int i = 0, j = 0, count = 0;
        while(i < left.length && j < right.length) {
            if((long) left[i] > 2 * (long) right[j]) {
                count += left.length - i;
                j++;
            } else {
                i++;
            }
        }

        i = 0;
        j = 0;
        int k = low;
        while(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                nums[k++] = left[i++];
            } else {
                nums[k++] = right[j++];
            }
        }

        while(i < left.length)
            nums[k++] = left[i++];
        
        while(j < right.length)
            nums[k++] = right[j++];

        return count;
    }

    public int mergeSort(int[] nums, int low, int high) {
        int count = 0;

        if(low < high) {
            int mid = low + (high - low) / 2;
            count += mergeSort(nums, low, mid);
            count += mergeSort(nums, mid + 1, high);
            count += merge(nums, low, mid, high);
        }

        return count;
    }

    public int reversePairs(int[] nums) {
        return mergeSort(nums, 0, nums.length - 1);
    }
}