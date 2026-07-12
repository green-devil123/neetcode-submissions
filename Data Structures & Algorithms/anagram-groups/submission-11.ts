class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if(strs.length === 0) return [];
        const map = new Map<string, string[]>();
        for(let str of strs){
            const count = new Uint16Array(26);
            for(let i=0;i<str.length;i++){
                count[str.charCodeAt(i) - 97]++;
            }
            const key = count.join("#");
            if(!map.has(key)){
                map.set(key, []);
            }
            const arr = map.get(key);
            arr.push(str);
            map.set(key, arr);
        }
        return [...map.values()];
    }

}
