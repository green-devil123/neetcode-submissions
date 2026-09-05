class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
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
    decode(str) {
        let i=0;
        const result = [];
        while(i<str.length){
            let j=i;

            while(str[j] !== "#"){
                j++;
            }

            const len = Number(str.slice(i, j));
            const new_str = str.slice(j+1, j+1+len);
            result.push(new_str);

            i = j+1+len; 
        }
        return result;
    }
}
// 5#Hello5#World
// i=0
// j=1
// len = 5
// j+1, 7

// i = j+1+len






