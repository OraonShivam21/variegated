class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] stack = new int[n];
        int top = -1;

        int[] result = new int[n];
        Arrays.fill(result, -1);

        for(int i = 0; i < 2 * n - 1; i++) {
            int index = i % n;
            while(top != -1 && nums[stack[top]] < nums[index])
                result[stack[top--]] = nums[index];
            
            if(i < n)
                stack[++top] = index;
        }

        return result;
    }
}