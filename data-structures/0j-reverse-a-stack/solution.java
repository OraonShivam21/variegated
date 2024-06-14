class Solution {
    static void insertAtBottom(Stack<Integer> s, int x) {
        if(s.isEmpty()) {
            s.push(x);
            return;
        }

        int a = s.pop();
        insertAtBottom(s, x);
        s.push(a);
    }

    static void reverse(Stack<Integer> s) {
        if(s.isEmpty())
            return;
        
        int x = s.pop();
        reverse(s);
        insertAtBottom(s, x);
    }
}