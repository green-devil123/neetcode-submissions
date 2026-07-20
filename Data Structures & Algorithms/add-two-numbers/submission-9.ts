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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummyNode:ListNode | null = new ListNode(-1);
        let temp:ListNode | null = dummyNode;
        let carry = 0;
        while(l1 && l2){
            const sum = l1.val + l2.val + carry;
            const q = Math.floor(sum/10);
            const r = sum % 10;
            carry = q;
            temp.next = new ListNode(r);
            temp= temp.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        while(l1){
            const sum = l1.val + carry;
            const q = Math.floor(sum/10);
            const r = sum % 10;
            carry = q;
            temp.next = new ListNode(r);
            temp= temp.next;
            l1 = l1.next;
        }

        while(l2){
            const sum = l2.val + carry;
            const q = Math.floor(sum/10);
            const r = sum % 10;
            carry = q;
            temp.next = new ListNode(r);
            temp= temp.next;
            l2 = l2.next;
        }

        if(carry){
            temp.next = new ListNode(carry);
            temp= temp.next;
        }
        return dummyNode.next;
    }
}
