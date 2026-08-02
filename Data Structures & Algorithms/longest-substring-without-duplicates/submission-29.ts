class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // const set = new Set<string>();
        // let j=0;
        // let longest = 0;
        // for(let i=0;i<s.length;i++){
        //     while(set.has(s[i])){
        //         set.delete(s[j]);
        //         j++
        //     }
        //     set.add(s[i]);
        //     longest = Math.max(longest, i-j+1);
        // }
        // return longest;
        const map = new Map();
        let l =0;
        let res = 0;
        for(let r=0;r<s.length;r++){
            if(map.has(s[r])){
                l = Math.max(l, map.get(s[r])+1);
            }
            map.set(s[r], r);
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
