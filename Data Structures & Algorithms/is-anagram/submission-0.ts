class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const str1: string = s.split("").sort((a,b)=>a.localeCompare(b)).join("");
        const str2:string = t.split("").sort((a,b)=>a.localeCompare(b)).join("");

        const len = Math.max(str1.length, str2.length);
        for(let i=0;i<len;i++){
            if(str1[i] !== str2[i]) return false;
        }
        return true;
    }
}
