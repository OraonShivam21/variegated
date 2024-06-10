class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if(head == null)
            return head;
        
        ListNode curr = head;
        ListNode prev = null, next = null;
        int count = 0;

        while(curr != null && count < k) {
            curr = curr.next;
            count++;
        }

        curr = head;
        if(count == k) {
            count = 0;
            while(curr != null && count < k) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
                count++;
            }
        } else {
            prev = head;
        }

        if(next != null)
            head.next = reverseKGroup(next, k);

        return prev;
    }
}