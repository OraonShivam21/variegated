class Solution {
    public ListNode reverse(ListNode head) {
        ListNode curr = head;
        ListNode prev = null, next = null;

        while(curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    public boolean isPalindrome(ListNode head) {
        ListNode slow = head, fast = head.next;
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode rev = reverse(slow.next);
        slow.next = null;

        while(rev != null) {
            if(head.val != rev.val) {
                return false;
            }
            head = head.next;
            rev = rev.next;
        }

        return true;
    }
}