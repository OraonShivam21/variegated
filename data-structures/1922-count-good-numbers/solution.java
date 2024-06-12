class Solution {
    int mod = (int) (1e9) + 7;

    public long helper(long a, long b) {
        if(b == 0) return 1;

        long smallPow = helper(a, b / 2);
        if(b % 2 == 0)
            return ((smallPow % mod) * (smallPow % mod)) % mod;
        else
            return (a * smallPow * smallPow) % mod;
    }

    public int countGoodNumbers(long n) {
        long a = helper(5, (n + 1) / 2) % mod;
        long b = helper(4, n / 2) % mod;

        return (int) ((a * b) % mod);
    }
}