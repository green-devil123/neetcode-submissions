class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;
        // const s1 = s.split("").sort((a,b)=>a.localeCompare(b)).join("");
        // const s2 = t.split("").sort((a,b)=>a.localeCompare(b)).join("");
        // console.log(s1, "===", s2)
        // if(s1 !== s2) return false;
        // return true;

        const obj1 = {};
        for(const c of s){
            obj1[c] = (obj1[c] || 0)+1;
        }
        for(const c of t){
            obj1[c] = (obj1[c] || 0)-1;
        }
        for(const c of s){
            if(obj1[c] !== 0) return false;
        }
        return true;
    }
}
