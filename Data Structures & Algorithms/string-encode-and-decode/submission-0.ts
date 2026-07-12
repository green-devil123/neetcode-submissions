class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded:string = "";
        for(const str of strs){
            encoded += str.length+ "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i=0;
        let result = [];
        while(i<str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            const len = Number(str.slice(i,j));

            const newStr = str.slice(j+1, j+1+len);
            result.push(newStr);
            i = j+1+len;                                                                                                                             
        }
        return result;
    }
}
