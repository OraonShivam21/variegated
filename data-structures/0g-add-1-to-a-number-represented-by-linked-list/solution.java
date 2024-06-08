class Solution {
    public static Node solve(Node head) {
        if(head.next == null) {
            head.data += 1;
            return head;
        }

        Node curr = head;
        Node next = solve(head.next);
        if(next.data < 10) {
            curr.next = next;
            return curr;
        }
        next.data = 0;
        curr.data += 1;
        curr.next = next;
        return curr;
    }

    public static Node addOne(Node head) {
        Node temp = new Node(1);
        temp.next = solve(head);
        if(temp.next.data == 10) {
            temp.next.data = 0;
            return temp;
        }
        return temp.next;
    }
}