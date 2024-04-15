class Solution {
    public int maxArea(int[] height) {
        int maxVol = 0;
        int left = 0, right = height.length;

        while(left < right) {
            if(height[left] <= height[right]) {
                maxVol = Math.max(maxVol, height[left] * (right - left));
                left++;
            } else {
                maxVol = Math.max(maxVol, height[right] * (right - left));
                right--;
            }
        }

        return maxVol;
    }
}