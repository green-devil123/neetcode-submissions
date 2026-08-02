class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;
        const s1 = s.split("").sort((a,b)=>a.localeCompare(b)).join("");
        const s2 = t.split("").sort((a,b)=>a.localeCompare(b)).join("");
        console.log(s1, "===", s2)
        if(s1 !== s2) return false;
        return true;
    }
}
