"use strict"
const app = require("express")()
const bodyParser = require('body-parser');
const controller = require("./controller")

const PORT = 2500
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (request, response) {
    response.send("hello api.")
})

app.post('/test-page', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    // ...
    console.log(name)
    console.log(color)
});

app.route("/api")
    .get(controller.getlist)
    .post(controller.post)

app.route("/api:listID")
    .get(controller.listDetail)
    .put(controller.update)
    .delete(controller.delete)

app.listen(PORT, function () {
    console.log("listening on port 2500.")
})