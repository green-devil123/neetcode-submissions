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

    isEmpty(){
        return this.heap.length === 0;
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue(node){
        this.heap.push(node);
        let current = this.heap.length-1;
        while(current > 0 && this.heap[current].val < this.heap[this.getParent(current)].val){
            const parent = this.getParent(current);
            this.swap(parent, current);
            current = parent;
        }
    }

    dequeue(){
        if(this.isEmpty()) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        let current = 0;
        while(true){
            let smallest = current;
            const left = this.getLeft(current);
            const right = this.getRight(current);

            if(left < this.heap.length && 
            this.heap[left].val < this.heap[smallest].val){
                smallest = left;
            }
            if(right < this.heap.length && 
            this.heap[right].val < this.heap[smallest].val){
                smallest = right;
            }

            if(smallest === current) break;
            this.swap(smallest, current);
            current = smallest;
        }
        return root;
    }
}
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const dummy = new ListNode(-1);
        let tail = dummy;
        const minHeap = new MinHeap();
        for(const node of lists){
            if(node) minHeap.enqueue(node);
        }

        while(!minHeap.isEmpty()){
            const node = minHeap.dequeue();
            
            tail.next = node;
            tail = tail.next;

            if(node.next) minHeap.enqueue(node.next);
        }
        return dummy.next;
    }
}
