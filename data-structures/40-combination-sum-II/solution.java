class Solution {
    public void backtrack(int[] candidates, int target, List<List<Integer>> list, List<Integer> temp, int start) {
        if(target == 0) {
            list.add(new ArrayList<>(temp));
            return;
        }

        if(target < 0) return;

        for(int i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] == candidates[i - 1]) continue;
            temp.add(candidates[i]);
            backtrack(candidates, target - candidates[i], list, temp, i + 1);
            temp.remove(temp.size() - 1);
        }
    }

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(candidates, target, list, new ArrayList<>(), 0);
        return list;
    }
}