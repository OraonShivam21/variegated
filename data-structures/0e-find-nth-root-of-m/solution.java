class Solution {
    public long power(int base, int exp) {
        long result = 1;

        for(int i = 1; i <= exp; i++) {
            result *= base;

            if(result > Integer.MAX_VALUE) return Long.MAX_VALUE;
        }

        return result;
    }

    public int NthRoot(int n, int m) {
        if(m == 1)
            return m;
        
        int low = 1, high = m;

        while(low <= high) {
            int mid = low + (high - low) / 2;
            long midN = power(mid, n);

            if(midN == m)
                return mid;
            else if(midN > m)
                high = mid - 1;
            else
                low = mid + 1;
        }

        return -1;
    }
}