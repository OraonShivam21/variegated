class Solution {
    public int[] prevSmaller(int[] nums) {
        int[] result = new int[nums.length];
        Stack<Integer> stack = new Stack<>();

        for(int i = 0; i < nums.length; i++) {
            while(!stack.isEmpty() && stack.peek() >= nums[i])
                stack.pop();
            result[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(nums[i]);
        }

        return result;
    }
}