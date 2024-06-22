class Solution {
    public String removeDuplicates(String s) {
        char[] arr = new char[s.length()];
        int lastIndex = -1;

        for(char ch : s.toCharArray()) {
            if(lastIndex == -1 || arr[lastIndex] != ch) {
                arr[lastIndex + 1] = ch;
                lastIndex++;
            } else
                lastIndex--;
        }

        return new String(arr, 0, lastIndex + 1);
    }
}