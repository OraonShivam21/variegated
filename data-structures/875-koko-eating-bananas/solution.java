class Solution {
    public boolean possibleSpeed(int[] piles, int h, int k) {
        if(k == 0) return false;

        int i = 0;
        while(h >= 0 && i < piles.length) {
            h -= Math.ceil((double) piles[i++] / k);
        }

        return h >= 0 && i == piles.length;
    }

    public int minEatingSpeed(int[] piles, int h) {
        int low = 1, high = piles[0];
        for(int pile : piles)
            high = Math.max(high, pile);
        
        int ans = -1;
        while(low <= high) {
            int mid = low + (high - low) / 2;

            if(possibleSpeed(piles, h, mid)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}