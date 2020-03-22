const request = require("request-promise")

request("http://localhost:2500/api?listID=1")
    .then(console.log)
