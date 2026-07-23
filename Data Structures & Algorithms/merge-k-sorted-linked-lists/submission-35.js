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

    isEmpty(){
        return this.heap.length === 0
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
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue(node){
        this.heap.push(node);
        let current = this.heap.length-1;
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
        let current = 0;
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

            if(smallest === current) break;
            this.swap(smallest, current);
            current = smallest;
        }
        return root;
    }
}

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
        // for(let i=1;i<n;i++){
        //     lists[i] = this.mergeSortLL(lists[i-1], lists[i]);
        // }
        // return lists[n-1]

        //heap
        const dummy = new ListNode(-1);
        let tail = dummy;
        const minHeap = new MinHeap((a,b) => a.val-b.val);
        for(const head of lists){
            minHeap.enqueue(head);
        }

        while(!minHeap.isEmpty()){
            const node = minHeap.dequeue();
            if(node.next){
                minHeap.enqueue(node.next);
            }
            tail.next = node;
            tail=tail.next;
        }
        return dummy.next;
    }
}



