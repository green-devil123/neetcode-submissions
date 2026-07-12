class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;
        const map = new Map<string, number>();
        for(const ch of s){
            map.set(ch, (map.get(ch) || 0)+1);
        }

        for(const ch of t){
            const count = map.get(ch)-1;
            map.set(ch, count);
        }

        for(const [k, v] of map){
            if(v !== 0) return false;
        }
        return true;
    }
}
