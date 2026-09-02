class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const word of strs){
            const arr = new Array(26).fill(0);
            for(const s of word){
                arr[s.charCodeAt()-97]++;
            }
            const key = arr.join("#");
            if(map.has(key)){
                const newArr = map.get(key);
                newArr.push(word)
                map.set(key, newArr);
            }else{
                map.set(key, [word]);
            }
        }
        return [...map.values()]
    }
}

