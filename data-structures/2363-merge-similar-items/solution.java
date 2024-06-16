// solution 1
class Solution1 {
    public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
        Arrays.sort(items1, Comparator.comparingInt(arr -> arr[0]));
        Arrays.sort(items2, Comparator.comparingInt(arr -> arr[0]));

        List<List<Integer>> list = new ArrayList<>();
        Set<List<Integer>> set = new HashSet<>();
        int i = 0, j = 0;
        while(i != items1.length && j != items2.length) {
            if(items1[i][0] < items2[j][0]) {
                set.add(Arrays.asList(items1[i][0], items1[i][1]));
                i++;
            } else if(items1[i][0] > items2[j][0]) {
                set.add(Arrays.asList(items2[j][0], items2[j][1]));
                j++;
            } else if(items1[i][0] == items2[j][0]) {
                set.add(Arrays.asList(items1[i][0], items1[i][1] + items2[j][1]));
                i++;
                j++;
            }
        }

        while(i < items1.length) {
            set.add(Arrays.asList(items1[i][0], items1[i][1]));
            i++;
        }

        while(j < items2.length) {
            set.add(Arrays.asList(items2[j][0], items2[j][1]));
            j++;
        }

        list.addAll(set);

        Collections.sort(list, Comparator.comparingInt(li -> li.get(0)));

        return list;
    }
}

// solution 2
class Solution {
    public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
        int[] nums = new int[1001];

        for(int[] its : items1) {
            nums[its[0]] = its[1];
        }

        for(int[] its : items2) {
            nums[its[0]] += its[1];
        }

        List<List<Integer>> list = new ArrayList<>();
        for(int i = 0; i < 1001; i++) {
            if(nums[i] != 0) {
                list.add(Arrays.asList(i, nums[i]));
            }
        }

        return list;
    }
}