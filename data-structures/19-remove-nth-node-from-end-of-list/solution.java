class Solution {
    public ListNode removeNthNodeFromEnd(ListNode head, int n) {
        ListNode slow = head;
        ListNode fast = head;

        while(n-- > 0) {
            fast = fast.next;
        }

        if(fast == null) {
            ListNode ans = head.next;
            head.next = null;
            return ans;
        }

        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }

        ListNode delNode = slow.next;
        slow.next = slow.next.next;
        delNode = null;

        return head;
    }
}