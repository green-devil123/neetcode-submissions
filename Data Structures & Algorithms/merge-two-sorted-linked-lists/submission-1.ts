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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(list1 === null || list2 === null) return list1 || list2;

        const dummy:ListNode = new ListNode(-1);
        let temp:ListNode = dummy;
        
        while(list1 && list2){
            if(list1.val <= list2.val){
                temp.next = new ListNode(list1.val);
                list1 = list1.next;
            }else{
                temp.next = new ListNode(list2.val);
                list2 = list2.next;
            }
            temp = temp.next;
        }

        while(list1){
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
            temp = temp.next;
        }

        while(list2){
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
            temp = temp.next;
        }
        return dummy.next;
    }
}
