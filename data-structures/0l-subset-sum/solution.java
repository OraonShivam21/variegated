// Problem statement
// You are given an array 'A' of 'N' integers. You have to return true if there exists a subset of elements of 'A' that sums up to 'K'. Otherwise, return false.
public class Solution {
    public static boolean isSubsetPresent(int n, int k, int[] a, int sum, int ind) {
        if(sum == k && ind <= n)
            return true;
        
        if(sum > k || ind == n)
            return false;
        
        if(isSubsetPresent(n, k, a, sum + a[ind], ind + 1))
            return true;
        
        if(isSubsetPresent(n, k, a, sum, ind + 1))
            return true;
        
        return false;
    }

    public static boolean isSubsetPresent(int n, int k, int[] a) {
        return isSubsetPresent(n, k, a, 0, 0);
    }
}