class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodeStr:string = ""
        for(const str of strs){
            const len:string = String(str.length);
            encodeStr += len+"#"+str+"#";
        }
        return encodeStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result:string[] =[];
        let i=0;
        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            const len = Number(str.slice(i, j));
            const newStr = str.slice(j+1, j+1+len);
            result.push(newStr);
            i = j+1+len+1;
        }
        return result;
    }
}
