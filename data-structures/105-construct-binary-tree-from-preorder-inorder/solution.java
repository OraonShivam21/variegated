class Solution {
    int pind = 0;
    int iind = 0;

    public TreeNode buildTree(int[] preorder, int[] inorder, int stop) {
        if(pind >= preorder.length)
            return null;
        
        if(inorder[iind] == stop) {
            iind++;
            return null;
        }

        TreeNode node = new TreeNode(preorder[pind++]);
        node.left = buildTree(preorder, inorder, node.val);
        node.right = buildTree(preorder, inorder, stop);

        return node;
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return buildTree(preorder, inorder, Integer.MIN_VALUE);
    }
}