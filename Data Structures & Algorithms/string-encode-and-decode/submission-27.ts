class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = ""
        for(const ele of strs){
            encoded +=  ele.length+"#"+ele;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console
        let i = 0;
        let j=0;
        const result:string[] = [];
        while(i<str.length){
            j = i;
            while(str[j] !== "#"){
                j++;
            }
            let len = Number(str.slice(i, j));
            const new_str = str.slice(j+1, j+1+len);
            result.push(new_str);
            i = j+1+len
        }
        return result;
    }
}
