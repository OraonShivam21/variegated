class Solution {
    public String toString(char[] ch) {
        String str = new String(ch);
        return str;
    }

    public void generate(int k, char[] ch, int n) {
        if(n == k) {
            System.out.print(toString(ch) + " ");
            return;
        }

        if(ch[n - 1] == '1') {
            ch[n] = '0';
            generate(k, ch, n + 1);
        }

        if(ch[n - 1] == '0') {
            ch[n] = '0';
            generate(k, ch, n + 1);

            ch[n] = '1';
            generate(k, ch, n + 1);
        }
    }

    public void generateBinaryStrings(int k) {
        if(k <= 0)
            return;
        
        char[] ch = new char[k];

        ch[0] = '0';
        generate(k, ch, 1);

        ch[0] = '1';
        generate(k, ch, 1);
    }
}