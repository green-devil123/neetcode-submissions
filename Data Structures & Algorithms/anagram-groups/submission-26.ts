class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for(const word of strs){
            const arr:number[] = new Array(26).fill(0);
            for(let i=0;i<word.length;i++){
                arr[word.charCodeAt(i)-97]++;
            }
            const key:string = arr.join("#");
            const subArr = map.get(key) || [];
            subArr.push(word);
            map.set(key, subArr);
        }
        return [...map.values()]
        // return [...map.values()].sort((a,b)=>a.length-b.length);
    }
}
