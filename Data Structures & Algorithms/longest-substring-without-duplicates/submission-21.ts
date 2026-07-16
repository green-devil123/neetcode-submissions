class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLen = 0;
        const map = new Map<string, number>();
        let left:number = 0;
        for(let right=0;right<s.length;right++){
            if(map.has(s[right])){
                left = Math.max(left, map.get(s[right])!+1);
            }
            map.set(s[right], right);
            maxLen = Math.max(maxLen, right-left+1);
        }
        return maxLen;
    }
}
