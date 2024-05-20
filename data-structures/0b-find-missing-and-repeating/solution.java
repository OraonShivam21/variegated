class Solution {
    public int[] findMissingRepeating(int[] nums, int n) {
        int[] missing = new int[2];
        int[] count = new int[n + 1];

        for(int num : nums)
            count[num]++;
        
        for(int i = 1; i <= n; i++) {
            if(count[i] == 0)
                missing[1] = i;
            else if(count[i] == 2)
                missing[0] = i;
        }

        return missing;
    }
}