class Solve {
    Pair getFloorAndCeil(int[] arr, int n, int x) {
        // code here
        Arrays.sort(arr);
        
        // floor
        int low = 0, high = n - 1, floor = -1;
        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(arr[mid] <= x) {
                floor = arr[mid];
                low = mid + 1;
            } else
                high = mid - 1;
        }
        
        // ceil
        int ceil = -1;
        low = 0;
        high = n - 1;
        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(arr[mid] >= x) {
                ceil = arr[mid];
                high = mid - 1;
            } else
                low = mid + 1;
        }
        
        Pair pair = new Pair(floor, ceil);
        return pair;
    }
}