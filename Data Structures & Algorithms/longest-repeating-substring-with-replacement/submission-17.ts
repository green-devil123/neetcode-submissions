class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // let maxLen = 0;
        // for(let i=0;i<s.length;i++){
        //     const hash = new Array(26).fill(0);
        //     let maxFreq = 0;
        //     for(let j=i;j<s.length;j++){
        //         const code = s.charCodeAt(j)-65;
        //         const len = j-i+1;
        //         hash[code]++;
        //         maxFreq = Math.max(maxFreq, hash[code]);
        //         const changes = len - maxFreq;
        //         if(changes <= k){
        //             maxLen = Math.max(maxLen, len);
        //         }
        //     }
        // }
        // return maxLen;

        let maxLen = 0;
        let maxFreq = 0;
        let left = 0;
        const hash = new Array(26).fill(0);

        for(let right=0;right<s.length;right++){
            const idx = s.charCodeAt(right)-65;
            hash[idx]++;

            maxFreq = Math.max(maxFreq, hash[idx]);

            while((right-left+1) - maxFreq > k){
                const id = s.charCodeAt(left)-65;
                hash[id]--;
                left++;
            }
            maxLen = Math.max(right-left+1, maxLen);
        }
        return maxLen;
    }
}
