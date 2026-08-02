class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set();
        let j = 0;
        let longest = 0;
        for(let i=0;i<s.length;i++){
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
            longest = Math.max(longest, i-j+1);
        }
        return longest;
    }
}
