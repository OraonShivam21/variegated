// Given an integer array nums that may contain duplicates, return all possible 
// subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

class Solution {
    public void backtrack(int[] nums, List<List<Integer>> list, List<Integer> temp, int start) {
        list.add(new ArrayList<>(temp));

        for(int i = start; i < nums.length; i++) {
            if(i > start && nums[i] == nums[i - 1]) continue;
            temp.add(nums[i]);
            backtrack(nums, list, temp, i + 1);
            temp.remove(temp.size() - 1);
        }
    }

    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(nums, list, new ArrayList<>(), 0);
        return list;
    }
}