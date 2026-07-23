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
    findKthNode(temp, k){
        k--;
        while(temp && k > 0){
            temp = temp.next;
            k--;
        }
        return temp;
    }
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let temp = head;
        let newHead  = head;
        let prevLast = null;
        while(temp){
            const kthNode = this.findKthNode(temp, k);
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
                newHead = reverseHead;
            }else{
                prevLast.next = reverseHead;
            }
            prevLast = temp;
            temp = nextNode;
        }
        return newHead;
    }
}
