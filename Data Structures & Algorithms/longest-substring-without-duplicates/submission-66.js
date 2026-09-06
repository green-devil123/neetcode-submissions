class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // const set = new Set();
        // let left = 0;
        // let max = 0;
        // for(let right=0;right<s.length;right++){
        //     while(set.has(s[right])){
        //         set.delete(s[left]);
        //         left++;
        //     }
        //     set.add(s[right]);
        //     max = Math.max(max, right-left+1);
        // }
        // return max;

        let max = 0;
        let left = 0;
        const map = new Map();
        for(let right=0;right<s.length;right++){
            if(map.has(s[right])){
                left = Math.max(left, (map.get(s[right]) || 0)+1);
            }
            max = Math.max(max, right-left+1);
            map.set(s[right], right);
        }
        return max;
    }
}
// j=0
// zxy
// i=3