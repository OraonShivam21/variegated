// Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:
// (i) a next pointer to the next node,
// (ii) a bottom pointer to a linked list where this node is head.
// Each of the sub-linked-list is in sorted order.
// Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order.

class GfG {
    Node merge(Node root1, Node root2) {
        Node dummy = new Node(0);
        Node curr = dummy, curr1 = root1, curr2 = root2;

        while(curr1 != null && curr2 != null) {
            if(curr1.data < curr2.data) {
                curr.bottom = curr1;
                curr = curr1;
                curr1 = curr1.bottom;
            } else {
                curr.bottom = curr2;
                curr = curr2;
                curr2 = curr2.bottom;
            }
        }

        if(curr1 != null)
            curr.bottom = curr1;
        
        if(curr2 != null)
            curr.bottom = curr2;

        return dummy.bottom;
    }

    Node flatten(Node root) {
        if(root == null || root.next == null)
            return root;
        
        Node curr = root;
        Node prev = null, next = null;

        while(curr != null) {
            next = curr.next;
            prev = merge(curr, prev);
            curr = next;
        }

        return prev;
    }
}