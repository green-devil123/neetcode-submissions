class MinStack {
    private stack:number[];
    private min_stack:number[];
    constructor() {
        this.stack = [];
        this.min_stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        let current = this.min_stack[this.min_stack.length-1];
        if(current < val){
            this.min_stack.push(current);
        }else{
            this.min_stack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.min_stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min_stack[this.min_stack.length-1];
    }
}

