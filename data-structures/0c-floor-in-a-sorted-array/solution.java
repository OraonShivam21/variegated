class Solution {
    public int findFloor(int[] arr, int n, int x) {
        int low = 0, high = n - 1, ind = -1;

        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(arr[mid] <= x) {
                ind = mid;
                low = mid + 1;
            } else 
                high = mid - 1;
        }

        return ind;
    }
}