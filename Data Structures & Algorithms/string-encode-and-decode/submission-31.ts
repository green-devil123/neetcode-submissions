class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encode_str = "";
        for(const str of strs){
            const len = str.length;
            encode_str += len+"#"+str;
        }
        return encode_str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
         const res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        // find '#'
        while (str[j] !== "#") {
            j++;
        }

        const len = Number(str.slice(i, j));

        const word = str.slice(j + 1, j + 1 + len);

        res.push(word);

        i = j + 1 + len;
    }

    return res;
    }
}




