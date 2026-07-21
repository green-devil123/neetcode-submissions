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
    getKthNode(temp, k){
        let current = temp;
        k--;
        while(current && k>0){
            current = current.next;
            k--;
        }
        return current;
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
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let prevLast = null;
        let temp = head;
        let newHead = head;
        while(temp){
            const kthNode = this.getKthNode(temp, k);
            if(!kthNode){
                if(prevLast){
                    prevLast.next = temp; 
                }
                break;
            }
            const nextNode = kthNode.next;
            kthNode.next = null;
            const reverseHead = this.reverseLL(temp);
            if(temp === head){
                newHead = reverseHead
            }else{
                prevLast.next = reverseHead;
            }

            prevLast = temp;
            temp = nextNode;
        }
        return newHead;
    }
}
