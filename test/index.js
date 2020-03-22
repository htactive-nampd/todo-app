const app = require("express")()

class Controller {
    constructor(data) {
        this.data = data;
    }

    get (req, res, next) {
        
        res.send(this.data)
    }
}

let data = "abcxyz"
const controller = new Controller(data)

app.get("/", controller.get.bind(controller))

app.listen(3000, () => console.log("listen... "))
