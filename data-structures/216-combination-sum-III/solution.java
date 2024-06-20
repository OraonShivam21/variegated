// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

class Solution {
    public void backtrack(int[] nums, int k, int target, List<List<Integer>> list, List<Integer> temp, int start) {
        if(target == 0 && temp.size() == k) {
            list.add(new ArrayList<>(temp));
            return;
        }

        if(target < 0 || temp.size() > k) return;

        for(int i = start; i < nums.length; i++) {
            temp.add(nums[i]);
            backtrack(nums, k, target - nums[i], list, temp, i + 1);
            temp.remove(temp.size() - 1);
        }
    }

    public List<List<Integer>> combinationSum3(int k, int n) {
        int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        List<List<Integer>> list = new ArrayList<>();
        backtrack(nums, k, n, list, new ArrayList<>(), 0);
        return list;
    }
}