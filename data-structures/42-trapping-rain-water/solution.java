class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int leftMax = Integer.MIN_VALUE, rightMax = Integer.MIN_VALUE;
        int left = 0, right = n - 1, ans = 0;

        while(left < right) {
            if(height[left] <= height[right]) {
                if(height[left] > leftMax) leftMax = height[left];
                else ans += leftMax - height[left];
                left++;
            } else if(height[left] > height[right]) {
                if(height[right] > rightMax) rightMax = height[right];
                else ans += rightMax - height[right];
                right--;
            }
        }

        return ans;
    }
}