
class Controller {
    constructor(data) {
        this.data = data;
    }

    get() {
        console.log(this.data)
    }
}


modules.export = Controller