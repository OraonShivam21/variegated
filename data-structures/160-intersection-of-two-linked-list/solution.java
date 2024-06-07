class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if(headA == null || headB == null)
            return null;
        
        ListNode nodeA = headA, nodeB = headB;
        while(nodeA != nodeB) {
            nodeA = nodeA != null ? nodeA.next : nodeB;
            nodeB = nodeB != null ? nodeB.next : nodeA;
        }

        return nodeA;
    }
}