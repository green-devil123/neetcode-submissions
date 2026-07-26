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
        // if(head && !head.next && !head.random) return new Node(head.val);
        // const hashMap = new Map();
        // let current = head;
        // while(current){
        //     hashMap.set(current, new Node(current.val));
        //     current = current.next;
        // }
        // current = head;
        // while(current){
        //     const copy = hashMap.get(current);
        //     copy.next = current.next ? hashMap.get(current.next) : null;
        //     copy.random = current.random ? hashMap.get(current.random) : null;
        //     current = current.next;
        // }
        // return hashMap.get(head);

        // Step 1: Insert copy nodes
        let curr = head;
        while (curr) {
            const copy = new Node(curr.val);
            copy.next = curr.next;
            curr.next = copy;
            curr = copy.next;
        }

        // Step 2: Assign random pointers
        curr = head;
        while (curr) {
            if (curr.random) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        // Step 3: Separate the two lists
        curr = head;
        const dummy = new Node(0);
        let copyCurr = dummy;

        while (curr) {
            const copy = curr.next;

            curr.next = copy.next;
            copyCurr.next = copy;
            copyCurr = copy;

            curr = curr.next;
        }
        return dummy.next;
    }
}
