class Solution {
    public int findDays(int[] weights, int capacity) {
        int days = 0;

        for(int i = 0; i < weights.length; i++) {
            int count = 0;
            while(i < weights.length && count + weights[i] <= capacity) {
                count += weights[i];
                i++;
            }
            days++;
            i--;
        }

        return days;
    }

    public int shipWithinDays(int[] weights, int days) {
        int low = weights[0], high = 0;
        for(int weight : weights) {
            if(low < weight)
                low = weight;
            high += weight;
        }

        while(low <= high) {
            int mid = low + (high - low) / 2;

            if(findDays(weights, mid) <= days) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return low;
    }
}