class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode temp = head;
        ListNode d1 = new ListNode(0);
        ListNode d2 = new ListNode(0);

        ListNode pre1 = d1;
        ListNode pre2 = d2;

        while(temp != null) {
            if(temp.val < x) {
                pre1.next = temp;
                pre1 = temp;
            } else {
                pre2.next = temp;
                pre2 = temp;
            }
            temp = temp.next;
        }

        pre2.next = null;
        pre1.next = d2.next;

        return d1.next;
    }
}