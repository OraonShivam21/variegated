class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        int newStart = newInterval[0], newEnd = newInterval[1];
        boolean inserted = false;
        List<int []> list = new ArrayList<>();

        for(int[] interval : intervals) {
            int start = interval[0], end = interval[1];

            if(end < newStart || inserted) {
                list.add(new int[]{start, end});
                continue;
            }

            newStart = Math.min(newStart, start);
            if(newEnd < start) {
                list.add(new int[]{newStart, newEnd});
                list.add(new int[]{start, end});
                inserted = true;
                continue;
            }

            if(newEnd <= end) {
                list.add(new int[]{newStart, end});
                inserted = true;
            }
        }

        if(!inserted)
            list.add(new int[]{newStart, newEnd});

        return list.toArray(new int[list.size()][]);
    }
}