class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let left = 0;
        let max = 0;
        for(let right=0;right<s.length;right++){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            max = Math.max(max, right-left+1);
        }
        return max;
    }
}
// j=0
// zxy
// i=3