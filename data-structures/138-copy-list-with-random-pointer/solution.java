class Solution {
    Map<Node, Node> map = new HashMap<>();
    public Node copyRandomList(Node head) {
        if(head == null)
            return head;

        if(map.containsKey(head))
            return map.get(head);
        
        Node temp = new Node(head.val);
        map.put(head, temp);

        temp.next = copyRandomList(head.next);
        temp.random = copyRandomList(head.random);

        return temp;
    }
}