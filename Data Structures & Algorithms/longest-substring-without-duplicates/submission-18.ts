class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // let left = 0;
        // let maxLen =0;
        
        // const set = new Set<string>();

        // for(let right=0;right<s.length;right++){
        //     while(set.has(s[right])){
        //         set.delete(s[left]);
        //         left++;
        //     }
            
        //     set.add(s[right]);

        //     maxLen = Math.max(maxLen, right-left+1);
        // }
        // return maxLen;

        let map = new Map<string, number>();
        let left:number = 0;
        let maxLen:number = 0;

        for(let right=0;right<s.length;right++){
            if(map.has(s[right])){
                left = Math.max(left, map.get(s[right])! + 1);
            }
            map.set(s[right], right);
            maxLen = Math.max(maxLen, right-left+1);
        }
        return maxLen;
    }
}
