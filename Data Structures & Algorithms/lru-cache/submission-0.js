class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            let val = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, val)
            return val
        }
        else return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.map.delete(key)
        }
        this.map.set(key, value)
        if(this.capacity < this.map.size){
            for(let keyToremove of this.map){
                this.map.delete(keyToremove[0])
                break
            }
        }
    }
}
