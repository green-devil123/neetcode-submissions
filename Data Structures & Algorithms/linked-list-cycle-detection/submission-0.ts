/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const hashMap = new Map<ListNode, number>();
        let current:ListNode | null = head;

        while(current !== null){
            if(hashMap.has(current)) return true;
            hashMap.set(current, current.val);
            current = current.next;
        }
        return false;
    }
}
