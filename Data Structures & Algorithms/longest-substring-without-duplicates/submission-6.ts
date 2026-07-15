class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLen = 0;
        for(let i=0;i<s.length;i++){
            const set = new Set<string>();
            for(let j=i;j<s.length;j++){
                if(set.has(s[j])) break;

                set.add(s[j]);
            }
            maxLen = Math.max(maxLen, set.size);
        }
        return maxLen;
    }
}
