class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const count = new Map<string, number>();
        for(let i=0;i<s.length;i++){
            count.set(s[i], (count.get(s[i]) || 0)+1);
            count.set(t[i], (count.get(t[i]) || 0)-1);
        } 

        for(const [k, v] of count){
            if(v !== 0) return false;
        }
        return true;
    }
}
