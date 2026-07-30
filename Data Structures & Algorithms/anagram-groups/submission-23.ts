class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>;
        for(const str of strs){
            const arr = new Array(26).fill(0);
            for(let i=0;i<str.length;i++){
                arr[str.charCodeAt(i)-97]++;
            }
            const key = arr.join("#");
            const newArr = map.get(key) || []; 
            newArr.push(str);
            map.set(key, newArr);
        }
        return [...map.values()].sort((a,b)=>a.length-b.length)
    }
}
