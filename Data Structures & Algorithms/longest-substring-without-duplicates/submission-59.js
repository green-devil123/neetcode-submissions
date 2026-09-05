class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // TC: O(n+k)
        // SC:O(n)
        // const set = new Set();
        // let j=0;
        // let max = 0;
        // for(let i=0;i<s.length;i++){
        //     while(set.has(s[i])){
        //         set.delete(s[j]);
        //         j++;
        //     }
        //     set.add(s[i]);
        //     max = Math.max(max, i-j+1)
        // }
        // return max;
        // pwekeb
        //xyzxyzz
        //asdf
        const map = new Map();
        let left = 0;
        let max = 0;
        for(let right=0;right<s.length;right++){
            if(map.has(s[right])){
                left = Math.max(left, map.get(s[right])+1);
            }
            max = Math.max(max, right-left+1);
            map.set(s[right], right);
        }
        return max;
    }
}
