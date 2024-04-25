class Solution {
    public int[][] merge(int[][] intervals) {
        int n = intervals.length;
        Arrays.sort(intervals, new Comparator<int []>() {
            public int compare(int[] a, int[] b) {
                return a[0] - b[0];
            }
        });

        List<int []> list = new ArrayList<>();
        for(int i = 0; i < n; i++) {
            int start = intervals[i][0];
            int end = intervals[i][1];

            if(!list.isEmpty() && end <= list.get(list.size() - 1)[1]) continue;

            for(int j = i + 1; j < n; j++) {
                if(intervals[j][0] <= end) {
                    start = Math.min(start, intervals[j][0]);
                    end = Math.max(end, intervals[j][1]);
                } else break;
            }

            int[] temp = {start, end};
            list.add(temp);
        }

        int[][] result = new int[list.size()][];
        for(int i = 0; i < list.size(); i++) {
            result[i] = list.get(i);
        }

        return result;
    }
}