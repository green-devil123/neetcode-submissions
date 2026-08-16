/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class MinHeap{
    constructor(){
        this.heap = [];
    }
    
    getParent(i){
        return Math.floor((i-1)/2);
    }

    getLeft(i){
        return 2*i+1;
    }

    getRight(i){
        return 2*i+2;
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    enqueue(node){
        this.heap.push(node);
        let current = this.heap.length-1;
        while(current >0 && 
        this.heap[current].val<   
        this.heap[this.getParent(current)].val){
            let parent = this.getParent(current);
            this.swap(parent, current);
            current = parent;
        }
    }

    dequeue(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        let current = 0;
        while(true){
            let left = this.getLeft(current);
            let right = this.getRight(current);
            let smallest = current;

            if(left < this.heap.length && this.heap[left].val < this.heap[smallest].val){
                smallest = left;
            }

            if(right < this.heap.length && this.heap[right].val < this.heap[smallest].val){
                smallest = right;
            }

            if(smallest === current)break;
            this.swap(smallest, current);
            current = smallest
        }
        return root;
    }

    isEmpty(){
        return this.heap.length === 0;
    }

}

class Solution {
    // mergeList(l1, l2){
    //     if(!l1 && !l2) return null;
    //     if(!l1) return l2;
    //     if(!l2) return l1;
    //     const dummy = new ListNode(-1);
    //     let tail = dummy;
    //     while(l1 && l2){
    //         if(l1.val <= l2.val){
    //             tail.next = new ListNode(l1.val);
    //             l1 = l1.next;
    //         }else if(l1.val > l2.val){
    //             tail.next = new ListNode(l2.val);
    //             l2 = l2.next
    //         }
    //         tail = tail.next;
    //     }
    //     if(l1 || l2){
    //         tail.next = l1 || l2;
    //     }
    //     return dummy.next;
    // }

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const dummy = new ListNode(-1);
        let tail = dummy;
        const minHeap = new MinHeap();
        for(const node of lists){
            if(node)minHeap.enqueue(node);
        }
        while(!minHeap.isEmpty()){
            const minNode = minHeap.dequeue();

            tail.next = minNode;
            tail = tail.next;

            if(minNode.next) minHeap.enqueue(minNode.next);
        }
        return dummy.next;
    }
}
