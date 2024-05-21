class Solution {
    public int maxProduct(int[] nums) {
        int n = nums.length;
        int prod = 1, rProd = 1, max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++) {
            if(prod == 0)
                prod = nums[i];
            else
                prod *= nums[i];

            max1 = Math.max(max1, prod);
        }

        for(int i = n - 1; i >= 0; i--) {
            if(rProd == 0)
                rProd = nums[i];
            else
                rProd *= nums[i];
            
            max2 = Math.max(max2, rProd);
        }

        return Math.max(max1, max2);
    }
}