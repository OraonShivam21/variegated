class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null)
            return 0;
        
        if(root.left == null && root.right == null)
            return 1;
        
        int left = 0, right = 0;
        left += root.left != null ? maxDepth(root.left) : 0;
        right += root.right != null ? maxDepth(root.right) : 0;

        return Math.max(left, right) + 1;
    }
}