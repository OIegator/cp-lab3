class Cache{
    constructor(){
        this.values = new Map()
        this.amount = new Map()
        this.history = []
    }

    add(key, value, count = 1){
        this.values.set(key, value)
        this.amount.set(key, count)
    }

    get(x){
        if (!this.values.has(x))
            return null

        this.history.push(`Key = ${x}, Value = ${this.values.get(x)}, Count = ${this.amount.get(x)}`)
        if (this.amount.get(x) > 0) {
            this.amount.set(x, this.amount.get(x) - 1)
            return this.values.get(x)
        }
        else {
            this.values.delete(x)
            this.amount.delete(x)
            return null
        }
    }

    getHistory(){
        let string = ''
        for (let i = 0; i < history.length; i++)
            string += history[i] + '\n'
        return string
    }

    getInfo(x){
        let string = ''
        return `Key = ${x}, Value = ${this.values.get(x)}, Count = ${this.amount.get(x)}`
    }
}
export {Cache}