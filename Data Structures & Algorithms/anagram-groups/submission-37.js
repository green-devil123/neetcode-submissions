class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const str of strs){
            const arr = new Array(26).fill(0);
            for(let i=0;i<str.length;i++){
                arr[str.charCodeAt(i)-97]++;
            }
            const key = arr.join("#");
            const map_arr = map.has(key) ? map.get(key) : [];
            map_arr.push(str);
            map.set(key, map_arr);
        }
        return [...map.values()]
    }
}