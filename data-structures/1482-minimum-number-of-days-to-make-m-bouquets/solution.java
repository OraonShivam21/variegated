class Solution {
    public boolean possibleBouquets(int[] bloomDays, int m, int k, int day) {
        int total = 0;

        for(int i = 0; i < bloomDays.length; i++) {
            int count = 0;
            while(i < bloomDays.length && count < k && bloomDays[i] <= day) {
                count++;
                i++;
            }

            if(count == k) {
                total++;
                i--;
            }

            if(total >= m)
                return true;
        }

        return false;
    }

    public int minDays(int[] bloomDays, int m, int k) {
        if((long) m * k > bloomDays.length) return -1;

        int low = 1, high = (int) 1e9;
        while(low < high) {
            int mid = low + (high - low) / 2;
            if(possibleBouquets(bloomDays, m, k, mid)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        return low;
    }
}