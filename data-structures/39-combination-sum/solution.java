class Solution {
    public void backtrack(int[] candidates, int target, List<List<Integer>> list, List<Integer> tempList, int ind) {
        if(target == 0) {
            list.add(new ArrayList<>(tempList));
            return;
        }

        if(target < 0) return;

        for(int i = ind; i < candidates.length; i++) {
            tempList.add(candidates[i]);
            backtrack(candidates, target - candidates[i], list, tempList, i);
            tempList.remove(tempList.size() - 1);
        }
    }

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> list = new ArrayList<>();
        backtrack(candidates, target, list, new ArrayList<>(), 0);
        return list;
    }
}