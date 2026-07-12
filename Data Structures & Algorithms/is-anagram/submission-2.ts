class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>(); 
        for(let i=0;i<s.length;i++){
           const sCount = sMap.get(s[i]) || 0;;
           sMap.set(s[i], sCount+1);
           const tCount = tMap.get(t[i]) || 0;;
           tMap.set(t[i], tCount+1);
        }       
        const arr:string[] = [...sMap.keys()];
        for(let i=0;i<arr.length;i++){
            if(sMap.get(arr[i]) !== tMap.get(arr[i])) return false
        }
        return true
    }
}
