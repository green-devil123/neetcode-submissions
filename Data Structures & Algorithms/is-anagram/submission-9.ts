class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        // const count = new Array(26).fill(0);

        // for(let i=0;i<s.length;i++){
        //     count[s.charCodeAt(i)-97]++;
        //     count[t.charCodeAt(i)-97]--;
        // }

        // for(let i=0;i<26;i++){
        //     if(count[i] !== 0) return false;
        // }
        // return true;
        const sMap = new Map<string, number>();

        for(const ch of s){
            sMap.set(ch, (sMap.get(ch) || 0) + 1);
        }

        for(const ch of t){
            if(!sMap.has(ch)) return false;

            const count = sMap.get(ch) - 1;

            if(count == 0){
                sMap.delete(ch);
            }else{
                sMap.set(ch, count);
            }
        }

        return true;
    }
}
