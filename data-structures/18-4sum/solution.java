class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length;
        List<List<Integer>> result = new ArrayList<>();

        for(int i = 0; i < n; i++) {
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            for(int j = i + 1; j < n; j++) {
                if(j > (i + 1) && nums[j] == nums[j - 1]) continue;

                int start = j + 1;
                int end = n - 1;

                while(start < end) {
                    int sum = nums[i] + nums[j] + nums[start] + nums[end];
                    if(sum == target) {
                        result.add(Arrays.asList(nums[i], nums[j], nums[start], nums[end]));

                        int low = nums[start];
                        int high = nums[end];

                        start++; end--;

                        while(start < end && nums[start] == low) start++;
                        while(start < end && nums[end] == high) end--;
                    } else if(sum > target) end--;
                    else start++;
                }
            }
        }

        return result;
    }
}