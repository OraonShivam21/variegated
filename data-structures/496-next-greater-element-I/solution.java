class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] result = new int[nums1.length];

        Arrays.fill(result, -1);

        for(int i = 0; i < nums1.length; i++) {
            int j = 0;
            while(j < nums2.length) {
                if(nums2[j] == nums1[i])
                    break;
                j++;
            }
            while(j < nums2.length) {
                if(nums2[j] > nums1[i]) {
                    result[i] = nums2[j];
                    break;
                }
                j++;
            }
        }

        return result;
    }
}