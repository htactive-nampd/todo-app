class dsad {
    data : string
    constructor(data: string) {
        this.data = data
    }

    get() {
        console.log(this.data)
    }
}

let abc = new dsad("dsadasdas")

abc.get()