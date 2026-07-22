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
    constructor(compare){
        this.compare = compare;
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
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; 
    }

    enqueue(node){
        this.heap.push(node);
        let current = this.heap.length - 1;
        while(current > 0 && this.compare(this.heap[current], this.heap[this.getParent(current)]) < 0){
            const parent = this.getParent(current);
            this.swap(current, parent);
            current = parent;
        }
    }

    dequeue(){
        if(this.isEmpty()) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        let current = 0
        while(true){
            const left = this.getLeft(current);
            const right = this.getRight(current);
            let smallest = current;
            if(left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0){
                smallest = left;
            }
            if(right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0){
                smallest = right;
            }
            if(current === smallest) break;
            this.swap(current, smallest);
            current = smallest;
        }
        return root;
    }
}
class Solution {
    sortedLL(l1, l2){
        const dummy = new ListNode(-1);
        let tail = dummy;
        while(l1 && l2){
            if(l1.val < l2.val){
                tail.next = l1;
                l1 = l1.next
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
        if(lists.length === 0) return null;
        if(lists.length === 1) return lists[0];
        //Tc -n*k , SC- O(1)
        // for(let i=1;i<lists.length;i++){
        //     lists[i] = this.sortedLL(lists[i-1], lists[i]);
        // }
        // return lists[lists.length-1];

        // using Heap
        const minHeap = new MinHeap((a,b) => a.val - b.val);
        const dummy = new ListNode(-1);
        let tail = dummy;
        for(const head of lists){
            if(head)
            minHeap.enqueue(head);
        }

        while(!minHeap.isEmpty()){
            const node = minHeap.dequeue();

            tail.next = node;
            tail = tail.next;
            if(node  && node.next){
                minHeap.enqueue(node.next)
            }
        }

        return dummy.next;
    }
}
