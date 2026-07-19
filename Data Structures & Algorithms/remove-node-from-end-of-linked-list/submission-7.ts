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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const dummy = new ListNode(0, head);

        let fast = dummy;
        let slow = dummy;

        // Move fast n+1 steps ahead
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Move both pointers
        while (fast) {
            fast = fast.next;
            slow = slow.next;
        }

        // Remove nth node from end
        slow.next = slow.next.next;

        return dummy.next;
    }
}
