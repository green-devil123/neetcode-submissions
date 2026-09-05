class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let j=0;
        let max = 0;
        for(let i=0;i<s.length;i++){
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
            max = Math.max(max, i-j+1)
        }
        return max;
    }
}
