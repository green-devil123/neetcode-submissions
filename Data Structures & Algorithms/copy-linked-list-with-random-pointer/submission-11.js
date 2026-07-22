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

        // Tc : O(n), SC:O(n)
        // let hashMap = new Map();
        // let current = head;
        // while(current){
        //     hashMap.set(current, new Node(current.val));
        //     current = current.next
        // }
        // current = head;
        // while(current){
        //     const copy = hashMap.get(current);
        //     copy.next = current.next ?  hashMap.get(current.next) : null;
        //     copy.random = current.random ?  hashMap.get(current.random) : null;
            
        //     current = current.next;
        // }
        // return hashMap.get(head);

        // optimal approack O(n)

        let current = head;
        
        while(current){
            const copy = new Node(current.val);
            
            copy.next = current.next;
            
            current.next = copy;

            current = copy.next
        }//A->A'->B->B'->C->C'->D->D'

        current = head;
        while(current){
            const copy = current.next;

            copy.random = current.random ? current.random.next : null;
            current = current.next.next;
        }//set random

        current = head;
        const dummy = new Node(-1);
        let tail = dummy;
        while(current){
            const copy = current.next;
            
            current.next = copy.next;
            
            tail.next = copy;
            tail = copy;

            current = current.next;
        }
        return dummy.next;
    }
}
