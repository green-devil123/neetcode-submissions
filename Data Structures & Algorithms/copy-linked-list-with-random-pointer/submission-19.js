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
        if(head === null) return null;
        if(head && head.next === null && head.random === null){
           return new Node(head.val);
        }
        //cache TC : O(2n), SC: O(n)
        // const hashMap = new Map();
        // let current = head;

        // while(current){
        //     hashMap.set(current, new Node(current.val));
        //     current = current.next;
        // }
        // console.log(hashMap);
        // current = head;

        // while(current){
        //     const copy = hashMap.get(current);
        //     copy.next = current.next ? hashMap.get(current.next): null;
        //     copy.random = current.random ? hashMap.get(current.random): null;
        //     current = current.next;
        // }
        // return hashMap.get(head);

        // TC:O(n), SC:O(1)
        
        let current = head;
        // make chain A->A'->B->B'->C->C'->D->D'
        while(current){
            const copy = new Node(current.val);

            copy.next = current.next;
            current.next = copy;

            current = copy.next;
        }
        // attach random
        current = head;
        while(current){
            const copy = current.next;
            copy.random = current.random ? current.random.next : null;
            current = copy.next;
        }

        current = head;
        let dummy = new Node(-1);
        let tail = dummy;
        while(current){
            const copy = current.next;
            
            // restore the old list
            current.next = copy.next;

            //create new list
            tail.next = copy;
            tail= tail.next;
             copy.next = copy.next ? copy.next.next : null;
            // move list
            current = current.next
        }
        return dummy.next;
    }
}
