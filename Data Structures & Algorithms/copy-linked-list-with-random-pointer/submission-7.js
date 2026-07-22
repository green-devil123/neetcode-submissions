// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let hashMap = new Map();
        let current = head;
        while(current){
            hashMap.set(current, new Node(current.val));
            current = current.next
        }
        current = head;
        while(current){
            const copy = hashMap.get(current);
            copy.next = current.next ?  hashMap.get(current.next) : null;
            copy.random = current.random ?  hashMap.get(current.random) : null;
            
            current = current.next;
        }
        return hashMap.get(head);
    }
}
