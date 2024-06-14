class Main {
    public static String largestNumber(int[] nums) {
        Comparator<String> compare = (a, b) -> {
            String sortA = a + b;
            String sortB = b + a;
            return sortB.compareTo(sortA);
        }

        String[] newNums = new String[nums.length];
        for(int i = 0; i < nums.length; i++) {
            newNums[i] = String.valueOf(nums[i]);
        }

        Arrays.sort(newNums, compare);

        boolean allZeroes = true;
        for(int num : nums) {
            if(num != 0) {
                allZeroes = false;
                break;
            }
        }

        return allZeroes ? "0" : String.join("", newNums);
    }

    public static void main(String[] args) {
        int[] nums = {10, 2};
        System.out.println(largestNumber(nums));
    }
}