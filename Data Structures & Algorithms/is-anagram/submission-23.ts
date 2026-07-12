class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;
        const map1 = new Map<string, number>();
        const map2 = new Map<string, number>();
        
        for(let i=0;i<s.length;i++){
            map1.set(s[i], (map1.get(s[i]) || 0)+1);
            map2.set(t[i], (map2.get(t[i]) || 0)+1);
        }

        if(map1.size !== map2.size) return false;

        console.log(map1, map2)
        const arr = [...map1.keys()];
        console.log(arr);
        for(let i=0;i<arr.length;i++){
            const ele = arr[i];
            if(map1.get(ele) !== map2.get(ele)){
                 return false
            }else{
                map1.delete(ele);
                map2.delete(ele);
            }
        }
        console.log(map1,"===", map2)
        return map1.size === 0 && map2.size === 0;
    }
}
