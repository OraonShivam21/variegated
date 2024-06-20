// Given a list arr of n integers, return sums of all subsets in it. Output sums can be printed in any order.
class Solution {
    void backtrack(ArrayList<Integer> arr, int n, ArrayList<Integer> list, int sum, int start) {
        list.add(sum);

        if(start >= n) return;

        for(int i = start; i < n; i++) {
            backtrack(arr, n, list, sum + arr.get(i), i + 1);
        }
    }

    ArrayList<Integer> subsetSums(ArrayList<Integer> arr, int n) {
        ArrayList<Integer> list = new ArrayList<>();
        Collections.sort(arr);
        backtrack(arr, n, list, 0 ,0);
        return list;
    }
}