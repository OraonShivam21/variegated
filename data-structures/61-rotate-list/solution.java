class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if(head == null || head.next == null)
            return head;
        
        ListNode curr = head, tail = null;
        int n = 0;
        while(curr != null) {
            n++;
            tail = curr;
            curr = curr.next;
        }

        k = k % n;
        if(k == 0) return head;

        k = n - k;
        curr = head;
        while(k-- > 1) {
            curr = curr.next;
        }

        ListNode newNode = curr.next;
        curr.next = null;
        tail.next = head;
        return newNode;
    }
}