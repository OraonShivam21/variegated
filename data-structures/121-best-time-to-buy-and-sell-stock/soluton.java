class Solution {
    public int maxProfit(int[] prices) {
        int buy = Integer.MAX_VALUE, profit = 0, dayProfit = 0;

        for(int price : prices) {
            if(buy > price) buy = price;

            dayProfit = price - buy;

            if(profit < dayProfit) profit = dayProfit;
        }

        return profit;
    }
}