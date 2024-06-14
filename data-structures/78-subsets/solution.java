class Solution {
    public void generate(int[] nums, List<List<Integer>> list, List<Integer> temp, int start) {
        list.add(new ArrayList<>(temp));

        for(int i = start; i < nums.length; i++) {
            temp.add(nums[i]);
            generate(nums, list, temp, i + 1);
            temp.remove(temp.size() - 1);
        }
    }

    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> list = new ArrayList<>();
        generate(nums, list, new ArrayList<>(), 0);
        return list;
    }
}