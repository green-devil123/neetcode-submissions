class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map<string, number>();
        for(const char of s){
            map.set(char, (map.get(char) || 0) + 1);
        }
        for(const char of t){
            if(!map.has(char)) return false;
            const val = map.get(char);
            if(val === 0) return false;
            map.set(char, val-1);
        }
        for(const [key, val] of map){
            if(val !== 0) return false;
        }
        return true;
    }
}
