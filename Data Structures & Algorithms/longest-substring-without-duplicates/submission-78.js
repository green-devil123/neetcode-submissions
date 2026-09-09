class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // const set = new Set();
        // let left = 0, max=0;
        // for(let right=0;right<s.length;right++){
        //     while(s[right]){
        //         set.delete(s[left]);
        //         left++;
        //     }
        //     set.add(s[right]);
        //     max = Math.max(max, right-left+1);
        // }
        // return max;
        const map = new Map();
        let left = 0, max=0;
        for(let right=0;right<s.length;right++){
            if(map.has(s[right])){
                left = Math.max(left, map.get(s[right])+1);
            }
            map.set(s[right], right);
            max = Math.max(max, right-left+1);
        }
        return max;
    }
}