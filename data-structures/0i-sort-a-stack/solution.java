class Solution {
    public Stack<Integer> sort(Stack<Integer> stack) {
        if(stack.size() <= 1) return stack;

        int x = stack.pop();
        sort(stack);

        if(x > stack.peek())
            stack.push(x);
        else {
            int y = stack.pop();
            stack.push(x);
            sort(stack);
            stack.push(y);
        }

        return stack;
    }
}
