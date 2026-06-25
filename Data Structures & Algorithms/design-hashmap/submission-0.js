class MyHashMap {
    constructor() {
        this.data = []
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
            for(let i = 0; i < this.data.length; i++){
                if(this.data[i][0] == key) {
                    this.data.splice(i,1)
                }
            }
        
        this.data.push([key, value])

        return null
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i][0] == key) {
                return this.data[i][1]
            }
        }

        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i][0] == key) {
                this.data.splice(i,1)
            }
        }

        return null
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
