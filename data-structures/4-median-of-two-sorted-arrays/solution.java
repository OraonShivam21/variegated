class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        int i = 0, j = 0, med1 = 0, med2 = 0;

        for(int count = 0; count <= (m + n)/2; count++) {
            med2 = med1;
            if(i != m && j != n) {
                if(nums1[i] < nums2[j]) {
                    med1 = nums1[i++];
                } else {
                    med1 = nums2[j++];
                }
            } else if(i < m) {
                med1 = nums1[i++];
            } else {
                med1 = nums2[j++];
            }
        }

        if((m + n) % 2 == 0) {
            double sum = (double) med1 + (double) med2;
            return sum / 2.0;
        } else {
            return (double) med1;
        }
    }
}