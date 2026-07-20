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

    findKthNode(temp: ListNode | null, k:number): ListNode | null{
        k--;
        while(temp && k >0){
            temp = temp.next;
            k--;
        }
        return temp;
    }

    reverseLL(head: ListNode | null): ListNode | null{
        let current: ListNode | null = head;
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
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        let temp:ListNode | null = head;
        let newHead:ListNode | null = head;
        let prevLast:ListNode | null = null;

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

            if(head === temp){
                newHead = reverseHead;
            }else if(prevLast){
                prevLast!.next = reverseHead;
            }
            prevLast = temp;
            temp = nextNode;
        } 
        return newHead;
    }
}
