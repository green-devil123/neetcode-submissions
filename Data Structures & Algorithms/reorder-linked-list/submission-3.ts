/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// [0, 1, 2, 3] mid = 3
// [4, 5, 6] => [6,5,4]
// 0,6,1,5,2,4,3
class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let slow:ListNode | null = head;
        let fast:ListNode | null = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let head2 = this.reverseLL(slow.next);
        slow.next = null;
        let current = head;
        let current2 = head2;
        while(current2){
            let temp1 = current.next;
            let temp2 = current2.next;

            current.next = current2;
            current2.next = temp1;

            current = temp1;
            current2 = temp2;
        }
    }

    reverseLL(head){
        let current = head;
        let prev = null;
        while(current){
            const temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        return prev;
    }
}
