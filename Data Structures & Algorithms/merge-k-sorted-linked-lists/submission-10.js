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
    sortedLL(l1, l2){
        console.log("asda", l1, l2)
        const dummy = new ListNode(-1);
        let temp = dummy;

        while(l1 && l2){
            if(l1.val < l2.val){
                temp.next = l1;
                l1 = l1.next;
            }else{
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }
        temp.next = l1 || l2;

        return dummy.next;
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null;
        if(lists.length === 1) return lists[0];
        for(let i=1;i<lists.length;i++){
            lists[i] = this.sortedLL(lists[i], lists[i-1]);
        }
        return lists[lists.length-1];
    }
}
