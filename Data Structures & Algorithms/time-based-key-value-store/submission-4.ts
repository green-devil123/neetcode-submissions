class TimeMap {
    private keyStore;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }
        const arr = this.keyStore.get(key);
        arr.push([timestamp, value]);
        this.keyStore.set(key, arr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if(!this.keyStore.has(key)) return "";
        const arr = this.keyStore.get(key);
        for(let i=arr.length-1;i>=0;i--){
            if(timestamp >= arr[i][0]) return arr[i][1];
        }
        return ""
    }
}
