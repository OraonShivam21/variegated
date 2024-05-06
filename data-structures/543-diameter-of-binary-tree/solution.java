class Solution {
    int diameter = 0;

    public int heightOfBinaryTree(TreeNode root) {
        if(root == null)
            return 0;
        
        int left = heightOfBinaryTree(root.left);
        int right = heightOfBinaryTree(root.right);

        int currentDiameter = left + right;
        diameter = Math.max(diameter, currentDiameter);

        return Math.max(left, right) + 1;
    }

    public int diameterOfBinaryTree(TreeNode root) {
        heightOfBinaryTree(root);
        return diameter;
    }
}