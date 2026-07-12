class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const sMap = new Map<string, number>();
        for(const ch of s){
            sMap.set(ch, (sMap.get(ch) || 0) + 1);
        }

        for(const ch of t){
            if(!sMap.has(ch)) return false;
            const count = sMap.get(ch)-1;

            if(count === 0){
                sMap.delete(ch);
            }else{
                sMap.set(ch, count);
            }
        }

        return sMap.size === 0;
    }
}
