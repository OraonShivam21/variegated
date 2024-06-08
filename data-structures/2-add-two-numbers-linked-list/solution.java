class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(0);
        ListNode temp = head;
        int carry = 0;

        while(l1 != null || l2 != null || carry == 1) {
            int digit1 = l1 != null ? l1.val : 0;
            int digit2 = l2 != null ? l2.val : 0;

            int sum = digit1 + digit2 + carry;
            ListNode newNode = new ListNode(sum % 10);
            temp.next = newNode;
            temp = temp.next;

            carry = sum / 10;

            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
        }

        return head.next;
    }
}