class Solution {
    public int myAtoi(String s) {
        s = s.trim();
        if(s.length() == 0)
            return 0;
        
        int ind = 0, sign = 1;
        if(s.charAt(ind) == '-') {
            sign *= -1;
            ind++;
        } else if(s.charAt(ind) == '+') {
            ind++;
        }

        int result = 0;

        while(ind < s.length() && Character.isDigit(s.charAt(ind))) {
            int digit = s.charAt(ind) - '0';

            if(result > (Integer.MAX_VALUE - digit) / 10)
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;

            result = result * 10 + digit;
            ind++;
        }

        return result * sign;
    }
}