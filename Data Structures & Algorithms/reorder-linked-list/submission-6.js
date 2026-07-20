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
     * @return {void}
     */

    findMid(head){
        if(!head || !head.next) return head;
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow= slow.next;
            fast = fast.next.next
        }
        return slow;
    }

    reverseLL(head){
        if(!head || !head.next) return head;
        let prev = null;
        let current = head;
        while(current){
            const temp = current.next;
            current.next = prev
            prev = current;
            current = temp;
        }
        return prev;
    }

    reorderList(head) {
        if(!head || !head.next) return head;
        const mid = this.findMid(head);
        let l2 = this.reverseLL(mid.next);
        mid.next = null;
        let l1 = head; 

        while(l2){
            const temp1 = l1.next;
            const temp2 = l2.next;

            l1.next = l2;
            l2.next = temp1;

            l1 = temp1;
            l2 = temp2
        }
        return head;
    }
}
