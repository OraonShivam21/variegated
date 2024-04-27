class Solution {
    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
        int[] left = new int[n];
        int[] right = new int[n];

        left[0] = -1;
        right[n-1] = n;

        // for left: immediate smaller on left
        for(int i = 1; i < n; i++) {
            int prev = i-1;
            while(prev >= 0 && heights[prev] >= heights[i]) {
                prev = left[prev];
            }
            left[i] = prev;
        }

        // for right: immediate smaller on right
        for(int i = n-2; i >= 0; i--) {
            int next = i+1;
            while(next < n && heights[next] >= heights[i]) {
                next = right[next];
            }
            right[i] = next;
        }

        // finding max area
        int maxArea = 0;
        for(int i = 0; i < n; i++) {
            int width = right[i] - left[i] - 1;
            maxArea = Math.min(maxArea, width * heights[i]);
        }

        return maxArea;
    }
}