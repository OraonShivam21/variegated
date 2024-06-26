class MyStack {
    Queue<Integer> queue1;
    Queue<Integer> queue2;
    int top;

    public MyStack() {
        queue1 = new LinkedList<>();
        queue2 = new LinkedList<>();
    }
    
    public void push(int x) {
        queue1.offer(x);
        top = x;
    }
    
    public int pop() {
        while(queue1.size() > 1) {
            top = queue1.poll();
            queue2.offer(top);
        }
        int val = queue1.poll();
        while(!queue2.isEmpty()) {
            queue1.offer(queue2.poll());
        }
        return val;
    }
    
    public int top() {
        return top;
    }
    
    public boolean empty() {
        return queue1.isEmpty();
    }
}