class Solution {
    public int sumSubarrayMins(int[] nums) {
        int len = nums.length;

        int[] left = new int[len];
        int[] right = new int[len];

        Arrays.fill(left, -1);
        Arrays.fill(right, len);

        Stack<Integer> stack = new Stack<>();

        for(int i = 0; i < len; i++) {
            while(!stack.isEmpty() && nums[stack.peek()] >= nums[i])
                stack.pop();
            
            if(!stack.isEmpty())
                left[i] = stack.peek();
            
            stack.push(i);
        }

        stack.clear();

        for(int i = len - 1; i >= 0; i--) {
            while(!stack.isEmpty() && nums[stack.peek()] > nums[i])
                stack.pop();
            
            if(!stack.isEmpty())
                right[i] = stack.peek();
            
            stack.push(i);
        }

        int mod = (int) 1e9 + 7;
        long ans = 0;

        for(int i = 0; i < len; i++) {
            ans += (long) (i - left[i]) * (right[i] - i) % mod * nums[i] % mod;
            ans %= mod;
        }

        return (int) ans;
    }
}