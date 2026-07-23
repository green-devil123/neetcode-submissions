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
    mergeSortLL(l1, l2){
        const dummy = new ListNode(-1);
        let tail = dummy;
        while(l1 && l2){
            if(l1.val < l2.val){
                tail.next = l1;
                l1 = l1.next;
            }else{
                tail.next = l2;
                l2 = l2.next;
            }

            tail = tail.next;
        }

        tail.next = l1 || l2;

        return dummy.next;
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const n = lists.length;
        if(n === 0) return null;
        if(n === 1) return lists[n-1];
        for(let i=1;i<n;i++){
            lists[i] = this.mergeSortLL(lists[i-1], lists[i]);
        }
        return lists[n-1]
    }
}
