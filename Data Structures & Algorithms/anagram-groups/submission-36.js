class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 0)return [];
        if(strs.length === 1) return [[strs[0]]]
        const map = new Map();
        for(const str of strs){
            const arr = new Array(26).fill(0);
            for(const ch of str){
                arr[ch.charCodeAt() - 97]++;
            }
            const key = arr.join("#");
            if(!map.has(key)){
                map.set(key, [str]);
            }else{
                const newArr = map.get(key);
                newArr.push(str);
                map.set(key, newArr);
            }
        }
        return [...map.values()];
    }
}


