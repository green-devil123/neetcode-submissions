class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
        this.back = null
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.back = this.head;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1;
        const node = this.cache.get(key);
        this.delete(key);
        this.insert(key, node.value);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.delete(key);
        }
        if(this.size >= this.capacity){
            const lastNode = this.tail.back;
            this.delete(lastNode.key);
        }
        this.insert(key, value);
    }

    insert(key, value){
        const newNode= new Node(key, value);
        const nextNode = this.head.next;

        this.head.next = newNode;
        nextNode.back = newNode;

        newNode.back = this.head;
        newNode.next = nextNode;

        this.cache.set(key, newNode);
        this.size++;
    }

    delete(key){
        if(!this.cache.has(key)) return;
        const node = this.cache.get(key);
        const prevNode = node.back;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.back = prevNode;

        this.cache.delete(key);
        this.size--;
    }
}
