class Solution {
    public ListNode mergeList(ListNode head1, ListNode head2) {
        ListNode mergeLL = new ListNode(-1);
        ListNode temp = mergeLL;

        while(head1 != null && head2 != null) {
            if(head1.val <= head2.val) {
                temp.next = head1;
                head1 = head1.next;
            } else {
                temp.next = head2;
                head2 = head2.next;
            }
            temp = temp.next;
        }

        if(head1 != null)
            temp.next = head1;
        
        if(head2 != null)
            temp.next = head2;

        return mergeLL.next;
    }

    public ListNode sortList(ListNode head) {
        if(head == null || head.next == null)
            return head;
        
        ListNode prev = null, slow = head, fast = head;
        while(fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null;
        ListNode left = sortList(head);
        ListNode right = sortList(slow);

        return mergeList(left, right);
    }
}