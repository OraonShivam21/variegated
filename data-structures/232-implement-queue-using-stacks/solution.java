class MyQueue {
    Stack<Integer> stack;
    Stack<Integer> other;

    public MyQueue() {
        stack = new Stack<>();
        other = new Stack<>();
    }
    
    public void push(int x) {
        while(!stack.isEmpty())
            other.push(stack.pop());
        stack.push(x);
        while(!other.isEmpty())
            stack.push(other.pop());
    }
    
    public int pop() {
        return stack.pop();
    }
    
    public int peek() {
        return stack.peek();
    }
    
    public boolean empty() {
        return stack.isEmpty();
    }
}