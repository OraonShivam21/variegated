import java.util.List;

class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int count1 = 0, count2 = 0;
        int candidate1 = 0, candidate2 = 0;

        for(int num : nums) {
            if(count1 == 0 && candidate2 != num) {
                count1 = 1;
                candidate1 = num;
            } else if(count2 == 0 && candidate1 != num) {
                count2 = 1;
                candidate2 = num;
            } else if(candidate1 == num) {
                count1++;
            } else if(candidate2 == num) {
                count2++;
            } else {
                count1--;
                count2--;
            }
        }

        count1 = 0;
        count2 = 0;

        for(int num : nums) {
            if(candidate1 == num)
                count1++;
            else if(candidate2 == num)
                count2++;
        }

        int threshold = nums.length / 3;
        List<Integer> result = new ArrayList<>();

        if(count1 > threshold)
            result.add(candidate1);
        if(count2 > threshold)
            result.add(candidate2);

        return result;
    }
}