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

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    enqueue(node){
        if(this.isEmpty()){
            this.heap.push(node);
            return;
        }

        this.heap.push(node);

        let current = this.heap.length-1;

        while(current > 0 && 
        this.heap[current].val <  
        this.heap[this.getParent(current)].val){
            this.swap(current, this.getParent(current));
            current = this.getParent(current)
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
            let left = this.getLeft(current);
            let right = this.getRight(current);
            if(left < this.heap.length && this.heap[left].val < this.heap[smallest].val){
                smallest = left;
            }
            if(right < this.heap.length && this.heap[right].val < this.heap[smallest].val){
                smallest = right;
            }

            if(current === smallest) break;
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
        const minHeap = new MinHeap();
        const dummy = new ListNode(-1);
        let tail = dummy;
        for(const ls of lists){
           if(ls) minHeap.enqueue(ls);
        }   
        while(!minHeap.isEmpty()){
            const node = minHeap.dequeue();
            tail.next = node;
            tail = node;
            if(node.next){
                minHeap.enqueue(node.next);
            }
        }
        return dummy.next;
    }
}
